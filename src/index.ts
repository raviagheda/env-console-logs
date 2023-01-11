import dotenv from 'dotenv';
import Chalk from 'chalk';
import { BackgroundColor, ForegroundColor, Modifiers } from './chalk.interface';
dotenv.config();

export const consoleLog = (message?: any, ...optionalParams: any[]) => {
  if (process.env.enable_console_logs === 'true') {
    console.log(message, ...optionalParams);
  }
};

export const consoleChalk = (props: {color?: ForegroundColor, bgColor?: BackgroundColor, modifiers?: Modifiers}, message?: any, ...optionalParams: any[]) => {
  if (process.env.enable_console_logs === 'true') {
    let chalkRef: any = Chalk; 
    if(props?.color) chalkRef = chalkRef[props.color];
    if(props?.bgColor) chalkRef = chalkRef[props.bgColor];
    if(props?.modifiers) chalkRef = chalkRef[props.modifiers];

    console.log(chalkRef(message, ...optionalParams))
  }
}

export const consoleError = (message?: any, ...optionalParams: any[]) => {
  if (process.env.enable_console_logs === 'true') {
    console.error(message, ...optionalParams);
  }
};

export const consoleAsert = (value: any, message?: string, ...optionalParams: any[]) => {
  if (process.env.enable_console_logs === 'true') {
    console.assert(value, message, ...optionalParams);
  }
}

export const consoleTime = () => {
  if (process.env.enable_console_logs === 'true') {
    console.time();
  }
}

export const consoleTimeEnd = () => {
  if (process.env.enable_console_logs === 'true') {
    console.timeEnd();
  }
}