function string_methods()
{
    var input;

    input = document.getElementById('task1-input').value;
     
    document.getElementById('length').value=input.length;
    document.getElementById('upper-case').value=input.toUpperCase();
    document.getElementById('lower-case').value=input.toLowerCase();
}

function number_methods()
{
    var input;

    input = Number(document.getElementById('task2-input').value);

    document.getElementById('to-exponential').value=input.toExponential();
    document.getElementById('to-fix').value=input.toFixed(3);
    document.getElementById('precision').value=input.toPrecision(2);
}

function print_array()
{
    var names;

    names = [document.getElementById('task2-input2').value,document.getElementById('task1-input3').value,document.getElementById('task1-input4').value,document.getElementById('task1-input5').value];
    document.getElementById("print-array")= names.tojoin(",");
}

function get_date()
{
    var d;

    d= new Date();

    document.getElementById('year').value=d.getFullYear();
    document.getElementById('month').value=d.getMonth();
    document.getElementById('day').value=d.getDay();
}

function set_date()
{
    var n;
    n= new Date();

    

    document.getElementById('new-date').value=n= "Y: " + n.setFullYear(document.getElementById('new-year').value) + " M: " + n.setMonth(document.getElementById('new-month').value) + " D: " + n.setDate(document.getElementById('new-day').value);
}