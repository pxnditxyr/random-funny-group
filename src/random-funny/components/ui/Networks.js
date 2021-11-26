
const icons = require.context( '../../assets/icons' );

export const Networks = () => {
    return (
        <div className="networks">
            <a href="https://github.com/pxnditxyr/random-funny-group" target="_blank" rel="noopener noreferrer">
                <img src={ icons( './github.svg' ).default } alt="Github" />
            </a>
            <a href="https://twitter.com/PxndxsYR" target="_blank" rel="noopener noreferrer">
                <img src={ icons( './twitter.svg' ).default } alt="Twitter" />
            </a>
            <a href="https://youtube.com/channel/UCTH3gT3ql2wgy088ltFMtVw" target="_blank" rel="noopener noreferrer">
                <img src={ icons( './youtube.svg' ).default } alt="Youtube" />
            </a>
        </div>
    );
};
