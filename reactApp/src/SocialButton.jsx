import PropTypes from 'prop-types';

export function SocialButton(props) {
    return (
        <a href={props.href} title={props.title} className={`btn social-media ${props.colorBg}`} target={props.target}><i className={`fa ${props.iconFa}`}></i></a>
    )
}

SocialButton.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    iconFa: PropTypes.string.isRequired,
    colorBg: PropTypes.string.isRequired,

};
