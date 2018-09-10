import { promisify } from 'util';
import { exec } from 'child_process';


const asynxExec = promisify(exec);

export default (command) => {
    return asynxExec(command, {
        cwd: process.cwd(),
    });
}