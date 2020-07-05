const mongoose = require('mongoose');

exports.loginForm = (req, res) => {
	res.render('login', { title: 'Login' });
};

exports.registerForm = (req, res) => {
	res.render('register', { title: 'Register' });
};

exports.validateRegister = (req, res, next) => {
	req.sanitizeBody('name');
	req.checkBody('name', 'Please supply a Name.').notEmpty();
	req.checkBody('email', 'This Email is not valid.').isEmail();
	req.sanitizeBody('email').normalizeEmail({
		remove_dots: false,
		remove_extension: false,
		gmail_remove_subaddress: false,
	});
	req.checkBody('password', "Password can't be blank.").notEmpty();
	req.checkBody('password-confirm', "Confirm Password can't be blank.").notEmpty();
	req.checkBody('password-confirm', 'Oops! Your passwords do not match.').equals(req.body.password);

	const errors = req.validationErrors();
	if (errors) {
		req.flash(
			'error',
			errors.map((err) => err.msg)
		);
		res.render('register', { title: 'Register', body: req.body, flashes: req.flash() });
	}
};
