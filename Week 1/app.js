function average_score()
{
    var  score1, score2, score3, list_res, average_res;

    score1 = Number(document.getElementById('result1').value);
    score2 = Number(document.getElementById('result2').value);
    score3 = Number(document.getElementById('result3').value);

    average_res = (score1+score2+score3)/3 + "%";
    list_res = score1 + "% " + score2 + "% " + score3 + "% ";

     document.getElementById('average_result').value=average_res
     document.getElementById('list_result').value=list_res
}