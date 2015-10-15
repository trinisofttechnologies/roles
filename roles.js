Roles = {};
Roles.superAdmin = [];
Roles.addUsersToRoles = function(userId, role, groupId){
  if(!groupId)
    groupId = "default";
  if(!Roles.userIsInRole(userId, role, groupId)){
    var update = {};
    update["roles."+groupId] = role;
    Meteor.users.update({"_id": userId},{$push: update});
    for(var i=0,il=Roles.superAdmin.length;i<il;i++){
      Meteor.users.update({"_id": Roles.superAdmin[i]},{$push: update});
    }
  }
}
Roles.userIsInRole = function(userId, role, groupId){
  if(!groupId)
    groupId = "default";
  var find = {};
  find._id = userId;
  find["roles."+groupId]= role
  if(Meteor.users.find(find).count()!=0)
    return true;
  else
    return false;
}

Roles.removeUsersToRoles = function(userId, role, groupId){
  if(!groupId)
    groupId = "default";
  if(Roles.userIsInRole(userId, role, groupId)){
    var update = {};
    update["roles."+groupId] = role;
    Meteor.users.update({"_id": userId},{$pull: update})
  }
}

if(Meteor.isClient){
  UI.registerHelper("isInRole", function(opt){
    opt = opt.hash;
    if(!opt.groupId)
      opt.groupId = "default";
    return Roles.userIsInRole(opt.userId, opt.role, opt.groupId);
  });
}

if(Meteor.isServer){
  Meteor.publish(null, function(){
    return Meteor.users.find(this.userId, {"fields": {"roles": 1}})
  });
}