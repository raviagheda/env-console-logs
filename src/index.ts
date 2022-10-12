import dotenv from 'dotenv';
dotenv.config();

export const consoleLog = (message?: any, ...optionalParams: any[]) => {
  if (process.env.enable_console_logs === 'true') {
    console.log(message, ...optionalParams);
  }
};
