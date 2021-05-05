let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList: function() {
    let st = function(student) {
      console.log(this.title + ": " + student);
    };

    this.students.forEach(st.bind(this));
  }
};
group.showList();
