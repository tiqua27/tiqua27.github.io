window.onload = function () {

  let t_all = document.getElementsByName('t_all')[0];
  let tr_all = document.getElementsByName('tr_all')[0];
  let r_all = document.getElementsByName('r_all')[0];

  // console.log(t_all.length);
  // console.log(t_all.values);

  // function inputChange() {
  //   console.log('Change');
  // };

  t_all.addEventListener('change', function () {

    var t_all_val = this.value;

    t_s = document.querySelectorAll('[name^="t_"]');

    // console.log(t_s.length);

    t_s.forEach(sel => {
      // console.log(sel.value);
      sel.value = t_all_val;
    });

  });

  tr_all.addEventListener('change', function () {

    var tr_all_val = this.value;

    tr_s = document.querySelectorAll('[name^="tr_"]');

    // console.log(t_s.length);

    tr_s.forEach(sel => {
      // console.log(sel.value);
      sel.value = tr_all_val;
    });

  });

  r_all.addEventListener('change', function () {

    var r_all_val = this.value;

    r_s = document.querySelectorAll('[name^="r_"]');

    // console.log(t_s.length);

    r_s.forEach(sel => {
      // console.log(sel.value);
      sel.value = r_all_val;
    });

  });

}
