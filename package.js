Package.describe({
  name: 'trinisofttechnologies:roles',
  summary: "Trinisoft Technologies's Roles Package.",
  version: '1.0.0',
  git: 'https://github.com/iron-meteor/iron-router'
});

Npm.depends({
});


Package.on_use(function (api) {
	api.use('ui');

  api.add_files('roles.js', ['client', 'server']);

  if(api.export){
		api.export("Roles",['client', 'server']);
	}
});