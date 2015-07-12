AccountsTemplates.atInputHelpers.hasDisplayIcon = function() {
	if(this.displayIcon) {
		return true;
	}
	return false;
}

AccountsTemplates.getField('email').displayIcon='mdi-social-person-outline';
AccountsTemplates.getField('password').displayIcon='mdi-action-lock-outline';
if(AccountsTemplates.getField('password_again')) {
	AccountsTemplates.getField('password_again').displayIcon='mdi-action-lock-outline';
}
