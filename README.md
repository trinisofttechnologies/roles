# Trinisoft Technologies's Roles Package

# Usage on client / server javascript code
```javascript
// Adding a user to role
Roles.addUsersToRoles(userId, "admin", "sportsGroup");
Roles.addUsersToRoles(userId, "admin", null);
// Remove a user from role
Roles.removeUsersToRoles(userId, "admin", "sportsGroup");
Roles.removeUsersToRoles(userId, "admin", null);
// Checking if a user is in role
Roles.userIsInRole(userId, "admin", "sportsGroup");
Roles.userIsInRole(userId, "admin", null);
// returns true / false
```

# Usage on template
```html
{{#if isInRole userId=user._id role='admin' groupId='default'}}
    This is admin user.
{{else}}
   This is not an admin user.
{{/if}}
```