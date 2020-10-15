import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
	const { user, isAuthenticated } = useAuth0();

	return (
		isAuthenticated && (
			<div>
				<h2>{user.name}</h2>
				<img src={user.picture} alt={user.name} />
				<p>
					Email <a href={`mailto:${user.email}`}>{user.email}</a>
				</p>

				<pre>
					<code>{JSON.stringify(user, null, 4)}</code>
				</pre>
			</div>
		)
	);
};

export default Profile;
