import s from './Button.module.scss'
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
    <div className={s.ButtonPos}>
        <button type='button' className={s.Button} onClick={onClick}>Load more</button>
    </div>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}



export default Button