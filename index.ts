import command from './command';

async function init() {
    try {
        await command('git fetch --all');
        const { stdout: branchName } = await command('git rev-parse --abbrev-ref HEAD');
        await command('git add .');
        await command('git commit -m "initial develop commit for tuts2"');

        await command('git checkout develop');
        await command('git pull --rebase');
        await command(`git checkout ${branchName}`);
        await command('git rebase develop');
    } catch(e) {
        console.log('error!:', e);
    }
}

init();