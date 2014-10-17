describe('E-mail', function() {
	var rules = { email: { email: true } };

	it('should validate a valid address', function() {
		validate({ email: 'nickname89@gmail.com' }, rules, function(errors) {
			expect(errors).toBeNull();
		});
	});

	it('should not validate an address without an domain extention', function() {
		validate({ email: 'john@examplecom' }, rules, function(errors) {
			expect(errors).not.toBeNull();
		});
	});

	it('should not validate an address without a @', function() {
		validate({ email: 'john.example.com' }, rules, function(errors) {
			expect(errors).not.toBeNull();
		});
	});

	it('should return an error message when validations fails', function() {
		validate({ email: 'myemailcom' }, rules, function(errors) {
			expect(errors[0].message).toBe('email is not an valid email address');
		});
	});
});

describe('Min length', function() {
	
});