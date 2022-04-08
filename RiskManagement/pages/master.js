module.exports = createPageObjects({
  Master: {
    actions: {
      // add action functions here
       function () {
        element(by.control({
          controlType: "sap.m.Button"
        })).click();
      }
    },
    assertions: {
      // add assertion functions here
      
    }
  }
});
