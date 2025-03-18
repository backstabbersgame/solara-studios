import { NextResponse } from 'next/server';
import { google } from 'googleapis';

const auth = new google.auth.JWT({
  email: process.env.CLIENT_EMAIL,
  key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
  scopes: [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});

export const GET = async () => {
  try {
    const googleSheets = google.sheets({ version: 'v4', auth });

    const response = await googleSheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: `${process.env.SPREADSHEET_NAME}!A2:AO`,
    });

    const rows = response.data.values;
    if (!rows) {
      return NextResponse.json(
        { error: 'Dados não encontrados' },
        { status: 404 }
      );
    }

    const customers = rows.map((row) => ({
      nome: row[2],
      email: row[15].replace(/(.{4}).*(@.*)/, '$1*******$2'),
      cpf: row[18].replace(/\d{3}\.\d{3}/, '***.***').replace(/-\d{2}$/, '-**'),
      clienteDesde: row[37],
    }));
    return NextResponse.json(customers);
  } catch (error) {
    console.error('Falha ao buscar dados:', error);
    return NextResponse.json(
      { error: 'Falha ao buscar dados' },
      { status: 500 }
    );
  }
};
