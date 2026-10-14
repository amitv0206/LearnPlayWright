let score =101;

if(score >100 || score <0)
{
     console.log("Invalid Input");

}else{

    if(score>90)
{
    console.log("Grade A+");
}
else if(score >80 && score <=90)
{
    console.log("Grade A")
}
else if(score >70 && score <=80)
{
    console.log("Distinction");
}
else if (score >60 && score <=70)
{
    console.log("Grade B+");
}
else if(score > 50 && score <=60)
{
    console.log("Grade B");
}
else if (score >35 && score <=50)
{
    console.log("Need improvement");
}
else
{
    console.log("Fail");
}

}

