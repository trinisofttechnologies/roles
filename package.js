Package.describe({
  name: 'trinisofttechnologies:roles',
  summary: "Trinisoft Technologies's Roles Package.",
  version: '1.0.0',
  git: 'https://github.com/trinisofttechnologies/roles.git'
});

Npm.depends({
});


Package.on_use(function (api) {
	api.use('ui@1.0.0');

  api.add_files('roles.js', ['client', 'server']);

  if(api.export){
		api.export("Roles",['client', 'server']);
	}
});