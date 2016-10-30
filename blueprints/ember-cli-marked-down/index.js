/*jshint node:true*/
module.exports = {
  description: "The blueprint that installs this addon's required bower dependencies.",
  normalizeEntityName: function () {
  },
  afterInstall: function (/*options*/) {
    return this.addBowerPackageToProject('showdown');
  }
};
