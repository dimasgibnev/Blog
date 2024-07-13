import { useSelector } from 'react-redux';
import { Error } from '../error/Error';
import { selectUserRole } from '../../selectors';
import { ERROR} from '../../constants'
import { checkAccess } from '../../utils/check-access';

export const PrivateContent = ({ children, access, serverError }) => {
	const userRole = useSelector(selectUserRole);

	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED;
	const error = serverError || accessError


	return error ? <Error error={error} /> : children;
};