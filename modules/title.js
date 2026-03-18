function console_title(x) {
    const title = `[HACKER] ${x} | NspaqBomber v1.0| github.com/nspaqsec`;

    if (process.platform == 'win32') {
        process.title = title;
    } else {
        process.stdout.write('\x1b]2;' + title + '\x1b\x5c');
    }
}

module.exports = console_title;