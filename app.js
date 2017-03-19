 
var userName = prompt('Welcome to "Grade Calculator". Whats your name?' , 'e.g. Osama Imtiaz');
alert('Hi, ' + userName + '. If you want to continue, click "OK"');

var totalSubjects = prompt ('Please enter your total no. of Subject' , 'Between 1 to 14');


//********************************************* For 1 Subject ****************************************\\

if(totalSubjects === '1' ) {
  console.log (
        total1 = prompt('Total marks in subject no. 1')
  )
  console.log (
        num1 = prompt('Obtained marks in subject no. 1')
  )  
        
       PERCENTAGE = ((num1  / total1 )* 100);
       
 if(PERCENTAGE > 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />' + 'Total marks : ' + total1 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + num1 + '<br />'+ '<br />' +
                    'PERCENTAGE : - '  + '<br />'+ '<br />' + 'GRADE : Not possible' +'<br />' + '<br />'+ 'Remarks : - ')
}

else if(PERCENTAGE >= 80  && PERCENTAGE  <= 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />' + 'Total marks : '  + total1 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + num1 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE + '%' +'<br />'+ '<br />' + 'GRADE : A-one' +'<br />' + '<br />'
                    + 'Remarks : Excellent'+ '<br />' +'<br />' + '*****MANY CONGRATULATIONS*****')
}
else if(PERCENTAGE >= 70 && PERCENTAGE < 80){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'  + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'+ 'Total marks : '  + total1  +
                    '<br />'+ '<br />' + 'Marks obtained : ' + num1 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE + '%' +'<br />'+ '<br />' + 'GRADE : A ' +'<br />'+ '<br />' + 'Remarks : Good')
}

else if (PERCENTAGE >= 60  && PERCENTAGE  < 70){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'  + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'+ 'Total marks : '  + total1  +
                    '<br />'+ '<br />' + 'Marks obtained : ' + num1 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE + '%' +'<br />' + '<br />'+ 'GRADE : B' +'<br />' + '<br />'+ 'Remarks : Better')
}

else if (PERCENTAGE >= 50  && PERCENTAGE  < 60){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />' + '<br />'+ 'Total marks : '  + total1  +
                    '<br />'+ '<br />' + 'Marks obtained : ' + num1 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE + '%' +'<br />'+ '<br />' + 'GRADE : C' +'<br />'+ '<br />' + 'Remarks : You need to improve')
}

else if (PERCENTAGE >= 40  && PERCENTAGE  < 50){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />' + '<br />'+ 'Total marks :'  + total1  +
                    '<br />' + '<br />'+ 'Marks obtained : ' + num1 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE + '%' +'<br />'+ '<br />' + 'GRADE : D' +'<br />'+ '<br />' + 'Remarks : Not Better')
}
else if (PERCENTAGE >= 33  && PERCENTAGE  < 40){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'  + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'+ 'Total marks :'  + total1  +
                    '<br />' + '<br />'+ 'Marks obtained : ' + num1 + '<br />' + '<br />'+
                    'PERCENTAGE : ' + PERCENTAGE + '%' +'<br />'+ '<br />' + 'GRADE : E' +'<br />'+ '<br />' + 'Remarks : Passed')
}
else   { 
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'  + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'+ 'Total marks : '  + total1  +
                    '<br />'+ '<br />' + 'Marks obtained : ' + num1 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE + '%' +'<br />'+ '<br />' + 'GRADE : Fail' +'<br />'+ '<br />' + 'Remarks : Need Hard Work')
}

    
}
//********************************************* For 2 Subjects ****************************************\\

else if(totalSubjects === '2' ) {
  
  console.log (
        total1 =Number( prompt('Total marks in subject no. 1'))
  )
  console.log (
        num1 = Number(prompt('Obtained marks in subject no. 1'))
  ) 
  
  console.log (
        total2= Number(prompt('Total marks in subject no. 2'))
  )
    console.log (
        num2 = Number(prompt('Obtained marks in subject no. 2'))
  )     
       totalNumber2 = total1 + total2;
       totalObtained2 = num1 + num2;
       PERCENTAGE2 = ((totalObtained2  / totalNumber2 )* 100);
       
 if(PERCENTAGE2 > 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'
 + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber2 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtained2 + '<br />'+ '<br />' +
                    'PERCENTAGE : - '  + '<br />'+ '<br />' + 'GRADE : Not possible' +'<br />'+ '<br />' + 'Remarks : - ')
}

else if(PERCENTAGE2 >= 80  && PERCENTAGE2  <= 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' 
 + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber2 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained2 + '<br />' + '<br />'+
                    'PERCENTAGE : ' + PERCENTAGE2 + '%' +'<br />' + '<br />'+ 'GRADE : A-one' +'<br />' + '<br />'
                    + 'Remarks : Excellent'+ '<br />' +'<br />' + '*****MANY CONGRATULATIONS*****')
}
else if(PERCENTAGE2 >= 70 && PERCENTAGE2 < 80){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' 
 + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber2 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained2 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE2 + '%' +'<br />'+ '<br />' + 'GRADE : A ' +'<br />'+ '<br />' + 'Remarks : Good')
}

else if (PERCENTAGE2 >= 60  && PERCENTAGE2 < 70){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' 
 + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber2 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained2 + '<br />' + '<br />'+
                    'PERCENTAGE : ' + PERCENTAGE2 + '%' +'<br />'+ '<br />' + 'GRADE : B' +'<br />'+ '<br />' + 'Remarks : Better')
}

else if (PERCENTAGE2 >= 50  && PERCENTAGE2  < 60){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' 
 + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber2 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtained2 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE2 + '%' +'<br />'+ '<br />' + 'GRADE : C' +'<br />'+ '<br />' + 'Remarks : You need to improve')
}

else if (PERCENTAGE2 >= 40  && PERCENTAGE2  < 50){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' 
 + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber2 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained2 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE2 + '%' +'<br />' + '<br />'+ 'GRADE : D' +'<br />'+ '<br />' + 'Remarks : Not Better')
}
else if (PERCENTAGE2 >= 33  && PERCENTAGE2  < 40){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' 
 + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber2 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained2 + '<br />' + '<br />'+
                    'PERCENTAGE : ' + PERCENTAGE2 + '%' +'<br />'+ '<br />' + 'GRADE : E' +'<br />'+ '<br />' + 'Remarks : Passed')
}
else   { 
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' 
 + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber2 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained2 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE2 + '%' +'<br />'+ '<br />' + 'GRADE : Fail' +'<br />'+ '<br />' + 'Remarks : Need Hard Work')
}

    
}



//********************************************* For 3 Subjects ****************************************\\

else if(totalSubjects === '3' ) {
  
  console.log (
        total1 = Number(prompt('Total marks in subject no. 1'))
  )
  console.log (
        num1 = Number(prompt('Obtained marks in subject no. 1'))
  ) 
  
  console.log (
        total2= Number(prompt('Total marks in subject no. 2'))
  )
    console.log (
        num2 = Number(prompt('Obtained marks in subject no. 2'))
  )     
  
  console.log (
        total3= Number(prompt('Total marks in subject no. 3'))
  )
    console.log (
        num3 = Number(prompt('Obtained marks in subject no. 3'))
  )     
       totalNumber3 = total1 + total2 + total3;
       totalObtained3 = num1 + num2 + num3;
       PERCENTAGE3 = (( totalObtained3  / totalNumber3 )* 100);
 if(PERCENTAGE3 > 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />' + '<br />'+ 'Total marks : ' + totalNumber3 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained3 + '<br />'+ '<br />' +
                    'PERCENTAGE : - '  + '<br />' + '<br />'+ 'GRADE : Not possible' +'<br />'+ '<br />' + 'Remarks : - ')
}

else if(PERCENTAGE3 >= 80  && PERCENTAGE3  <= 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'  + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber3 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtained3 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE3 + '%' +'<br />'+ '<br />' + 'GRADE : A-one' +'<br />'+ '<br />' 
                    + 'Remarks : Excellent'+ '<br />' +'<br />' + '*****MANY CONGRATULATIONS*****')
}
else if(PERCENTAGE3 >= 70 && PERCENTAGE3 < 80){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'  + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber3 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained3 + '<br />' + '<br />'+
                    'PERCENTAGE : ' + PERCENTAGE3 + '%' +'<br />'+ '<br />' + 'GRADE : A ' +'<br />'+ '<br />' + 'Remarks : Good')
}

else if (PERCENTAGE3 >= 60  && PERCENTAGE3 < 70){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'  + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber3 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtained3 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE3 + '%' +'<br />' + '<br />'+ 'GRADE : B' +'<br />'+ '<br />' + 'Remarks : Better')
}

else if (PERCENTAGE3 >= 50  && PERCENTAGE3  < 60){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'  + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber3 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained3 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE3 + '%' +'<br />' + '<br />'+ 'GRADE : C' +'<br />'+ '<br />' + 'Remarks : You need to improve')
}

else if (PERCENTAGE3 >= 40  && PERCENTAGE3  < 50){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'  + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber3 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained3 + '<br />' + '<br />'+
                    'PERCENTAGE : ' + PERCENTAGE3 + '%' +'<br />'+ '<br />' + 'GRADE : D' +'<br />'+ '<br />' + 'Remarks : Not Better')
}
else if (PERCENTAGE3 >= 33  && PERCENTAGE3  < 40){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'  + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber3 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtained3 + '<br />' + '<br />'+
                    'PERCENTAGE : ' + PERCENTAGE3 + '%' +'<br />' + '<br />'+ 'GRADE : E' +'<br />' + '<br />'+ 'Remarks : Passed')
}
else   { 
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'  + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber3 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtained3 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE3 + '%' +'<br />' + '<br />'+ 'GRADE : Fail' +'<br />' + '<br />'+ 'Remarks : Need Hard Work')
}

    
}


//********************************************* For 4 Subjects ****************************************\\

else if(totalSubjects === '4' ) {
  
  console.log (
        total1 = Number(prompt('Total marks in subject no. 1'))
  )
  console.log (
        num1 = Number(prompt('Obtained marks in subject no. 1'))
  ) 
  
  console.log (
        total2= Number(prompt('Total marks in subject no. 2'))
  )
    console.log (
        num2 = Number(prompt('Obtained marks in subject no. 2'))
  )     
  
  console.log (
        total3= Number(prompt('Total marks in subject no. 3'))
  )
    console.log (
        num3 = Number(prompt('Obtained marks in subject no. 3'))
  )     
  
  console.log (
        total4=Number( prompt('Total marks in subject no. 4'))
  )
    console.log (
        num4 = Number(prompt('Obtained marks in subject no. 4'))
  )     
       totalNumber4 = total1 + total2 + total3+ total4;
       totalObtained4 = num1 + num2 + num3 + num4;
       PERCENTAGE4 = (( totalObtained4  / totalNumber4 )* 100);
 if(PERCENTAGE4 > 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />'
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />' + '<br />'+ 'Total marks : ' + totalNumber4 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained4 + '<br />'+ '<br />' +
                    'PERCENTAGE : - '  + '<br />' + '<br />'+ 'GRADE : Not possible' +'<br />'+ '<br />' + 'Remarks : - ')
}

else if(PERCENTAGE4 >= 80  && PERCENTAGE4  <= 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />'
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber4 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained4 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE4 + '%' +'<br />' + '<br />'+ 'GRADE : A-one' +'<br />'+ '<br />' 
                    + 'Remarks : Excellent'+ '<br />' +'<br />' + '*****MANY CONGRATULATIONS*****')
}
else if(PERCENTAGE4 >= 70 && PERCENTAGE4 < 80){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />'
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />' + '<br />'+ 'Total marks : ' + totalNumber4 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained4 + '<br />' + '<br />'+
                    'PERCENTAGE : ' + PERCENTAGE4 + '%' +'<br />' + '<br />'+ 'GRADE : A ' +'<br />'+ '<br />' + 'Remarks : Good')
}

else if (PERCENTAGE4 >= 60  && PERCENTAGE4 < 70){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'  + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />'
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'+ 'Total marks : '+ totalNumber4 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained4 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE4 + '%' +'<br />' + '<br />'+ 'GRADE : B' +'<br />' + '<br />'+ 'Remarks : Better')
}

else if (PERCENTAGE4 >= 50  && PERCENTAGE4  < 60){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'  + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />'
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber4 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtained4 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE4 + '%' +'<br />'+ '<br />' + 'GRADE : C' +'<br />' + '<br />'+ 'Remarks : You need to improve')
}

else if (PERCENTAGE4 >= 40  && PERCENTAGE4  < 50){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'  + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />'
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber4 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained4 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE4 + '%' +'<br />' + '<br />'+ 'GRADE : D' +'<br />'+ '<br />' + 'Remarks : Not Better')
}
else if (PERCENTAGE4 >= 33  && PERCENTAGE4  < 40){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'  + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />'
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber4 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained4 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE4 + '%' +'<br />' + '<br />'+ 'GRADE : E' +'<br />'+ '<br />' + 'Remarks : Passed')
}
else   { 
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'  + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />'
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />'
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber4 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained4 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE4 + '%' +'<br />'+ '<br />' + 'GRADE : Fail' +'<br />'+ '<br />' + 'Remarks : Need Hard Work')
}

    
}

//********************************************* For 5 Subjects ****************************************\\

else if(totalSubjects === '5' ) {
  
  console.log (
        total1 = Number(prompt('Total marks in subject no. 1'))
  )
  console.log (
        num1 = Number(prompt('Obtained marks in subject no. 1'))
  ) 
  
  console.log (
        total2= Number(prompt('Total marks in subject no. 2'))
  )
    console.log (
        num2 = Number(prompt('Obtained marks in subject no. 2'))
  )     
  
  console.log (
        total3= Number(prompt('Total marks in subject no. 3'))
  )
    console.log (
        num3 = Number(prompt('Obtained marks in subject no. 3'))
  )     
  
  console.log (
        total4= Number(prompt('Total marks in subject no. 4'))
  )
    console.log (
        num4 = Number(prompt('Obtained marks in subject no. 4'))
  ) 
  
  console.log (
        total5= Number(prompt('Total marks in subject no. 5'))
  )
    console.log (
        num5 = Number(prompt('Obtained marks in subject no. 5'))
  )     
       totalNumber5 = total1 + total2 + total3+ total4 + total5;
       totalObtained5 = num1 + num2 + num3 + num4 + num5;
       PERCENTAGE5 = (( totalObtained5  / totalNumber5 )* 100);
 if(PERCENTAGE5 > 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'+ '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />' 
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />' 
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '<br />'+ '<br />'  + 'Total marks : ' + totalNumber5 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained5 + '<br />'+ '<br />'  +
                    'PERCENTAGE : - '  + '<br />' + '<br />' + 'GRADE : Not possible' +'<br />' + '<br />' + 'Remarks : - ')
}

else if(PERCENTAGE5 >= 80  && PERCENTAGE5  <= 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />' 
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />' 
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber5 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained5 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE5 + '%' +'<br />'+ '<br />'  + 'GRADE : A-one' +'<br />'+ '<br />' 
                     + 'Remarks : Excellent'+ '<br />' +'<br />' + '*****MANY CONGRATULATIONS*****');
}
else if(PERCENTAGE5 >= 70 && PERCENTAGE5 < 80){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />' 
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />' 
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber5 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained5 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE5 + '%' +'<br />'+ '<br />'  + 'GRADE : A ' +'<br />'+ '<br />'  + 'Remarks : Good')
}

else if (PERCENTAGE5 >= 60  && PERCENTAGE5 < 70){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />' 
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />' 
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '<br />'+ '<br />' + 'Total marks : '+ totalNumber5 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained5 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE5 + '%' +'<br />'+ '<br />'  + 'GRADE : B' +'<br />'+ '<br />'  + 'Remarks : Better')
}

else if (PERCENTAGE5 >= 50  && PERCENTAGE5  < 60){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />' 
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />' 
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber5 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained5 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE5 + '%' +'<br />'+ '<br />'  + 'GRADE : C' +'<br />' + '<br />' + 'Remarks : You need to improve')
}

else if (PERCENTAGE5 >= 40  && PERCENTAGE5  < 50){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />' 
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />' 
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber5 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained5 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE5 + '%' +'<br />'+ '<br />'  + 'GRADE : D' +'<br />'+ '<br />'  + 'Remarks : Not Better')
}
else if (PERCENTAGE5 >= 33  && PERCENTAGE5  < 40){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />' 
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />' 
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber5 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained5 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE5 + '%' +'<br />'+ '<br />'  + 'GRADE : E' +'<br />'+ '<br />'  + 'Remarks : Passed')
}
else   { 
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />' 
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />' 
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber5 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained5 + '<br />' + '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE5 + '%' +'<br />'+ '<br />'  + 'GRADE : Fail' +'<br />' + '<br />' + 'Remarks : Need Hard Work')
}

    
}

//********************************************* For 6 Subjects ****************************************\\

else if(totalSubjects === '6' ) {
  
  console.log (
        total1 =Number( prompt('Total marks in subject no. 1'))
  )
  console.log (
        num1 = Number(prompt('Obtained marks in subject no. 1'))
  ) 
  
  console.log (
        total2= Number(prompt('Total marks in subject no. 2'))
  )
    console.log (
        num2 = Number(prompt('Obtained marks in subject no. 2'))
  )     
  
  console.log (
        total3=Number( prompt('Total marks in subject no. 3'))
  )
    console.log (
        num3 = Number(prompt('Obtained marks in subject no. 3'))
  )     
  
  console.log (
        total4= Number(prompt('Total marks in subject no. 4'))
  )
    console.log (
        num4 = Number(prompt('Obtained marks in subject no. 4'))
  ) 
  
  console.log (
        total5=Number( prompt('Total marks in subject no. 5'))
  )
    console.log (
        num5 = Number(prompt('Obtained marks in subject no. 5'))
  )     
  
  console.log (
        total6=Number( prompt('Total marks in subject no. 6'))
  )
    console.log (
        num6 = Number(prompt('Obtained marks in subject no. 6'))
  ) 
       totalNumber6 = total1 + total2 + total3+ total4 + total5 + total6;
       totalObtained6 = num1 + num2 + num3 + num4 + num5 + num6;
       PERCENTAGE6 = (( totalObtained6  / totalNumber6 )* 100);
 if(PERCENTAGE6 > 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />' 
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />' 
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '<br />'+ '<br />' 
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber6 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained6 + '<br />'+ '<br />'  +
                    'PERCENTAGE : - '  + '<br />'+ '<br />'  + 'GRADE : Not possible' +'<br />'+ '<br />'  + 'Remarks : - ')
}

else if(PERCENTAGE6 >= 80  && PERCENTAGE6  <= 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />' 
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />' 
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '<br />'+ '<br />' 
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber6 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained6 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE6 + '%' +'<br />'+ '<br />'  + 'GRADE : A-one' +'<br />' + '<br />'
                     + 'Remarks : Excellent'+ '<br />' +'<br />' + '*****MANY CONGRATULATIONS*****')
}
else if(PERCENTAGE6 >= 70 && PERCENTAGE6 < 80){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />' 
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />' 
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '<br />'+ '<br />' 
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber6 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtaine6 + '<br />' + '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE6 + '%' +'<br />'+ '<br />'  + 'GRADE : A ' +'<br />'+ '<br />'  + 'Remarks : Good')
}

else if (PERCENTAGE6 >= 60  && PERCENTAGE6 < 70){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />' 
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />' 
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '<br />'+ '<br />' 
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' + 'Total marks : '+ totalNumber6 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained6 + '<br />' + '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE6 + '%' +'<br />' + '<br />' + 'GRADE : B' +'<br />'+ '<br />'  + 'Remarks : Better')
}

else if (PERCENTAGE6 >= 50  && PERCENTAGE6  < 60){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />' 
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />' 
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '<br />'+ '<br />' 
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber6 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained6 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE6 + '%' +'<br />'+ '<br />'  + 'GRADE : C' +'<br />'+ '<br />'  + 'Remarks : You need to improve')
}

else if (PERCENTAGE6 >= 40  && PERCENTAGE6  < 50){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />' 
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />' 
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '<br />'+ '<br />' 
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber6 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained6 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE6 + '%' +'<br />'+ '<br />'  + 'GRADE : D' +'<br />' + '<br />' + 'Remarks : Not Better')
}
else if (PERCENTAGE6 >= 33  && PERCENTAGE6  < 40){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />' 
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />' 
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '<br />'+ '<br />' 
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber6 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained6 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE6 + '%' +'<br />' + '<br />' + 'GRADE : E' +'<br />'+ '<br />'  + 'Remarks : Passed')
}
else   { 
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '<br />'+ '<br />' 
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '<br />'+ '<br />' 
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '<br />'+ '<br />' 
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber6 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained6 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE6 + '%' +'<br />'+ '<br />'  + 'GRADE : Fail' +'<br />' + '<br />' + 'Remarks : Need Hard Work')
}

    
}

//********************************************* For 7 Subjects ****************************************\\

else if(totalSubjects === '7' ) {
  
  console.log (
        total1 = Number(prompt('Total marks in subject no. 1'))
  )
  console.log (
        num1 = Number(prompt('Obtained marks in subject no. 1'))
  ) 
  
  console.log (
        total2=Number( prompt('Total marks in subject no. 2'))
  )
    console.log (
        num2 = Number(prompt('Obtained marks in subject no. 2'))
  )     
  
  console.log (
        total3=Number( prompt('Total marks in subject no. 3'))
  )
    console.log (
        num3 = Number(prompt('Obtained marks in subject no. 3'))
  )     
  
  console.log (
        total4=Number( prompt('Total marks in subject no. 4'))
  )
    console.log (
        num4 = Number(prompt('Obtained marks in subject no. 4'))
  ) 
  
  console.log (
        total5=Number( prompt('Total marks in subject no. 5'))
  )
    console.log (
        num5 = Number(prompt('Obtained marks in subject no. 5'))
  )     
  
  console.log (
        total6=Number( prompt('Total marks in subject no. 6'))
  )
    console.log (
        num6 = Number(prompt('Obtained marks in subject no. 6'))
  ) 
  
  console.log (
        total7=Number( prompt('Total marks in subject no. 7'))
  )
    console.log (
        num7 = Number(prompt('Obtained marks in subject no. 7'))
  ) 
       totalNumber7 = total1 + total2 + total3+ total4 + total5 + total6 + total7;
       totalObtained7 = num1 + num2 + num3 + num4 + num5 + num6 + num7;
       PERCENTAGE7 = (( totalObtained7  / totalNumber7 )* 100);
 if(PERCENTAGE7 > 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber7 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained7 + '<br />'+ '<br />'  +
                    'PERCENTAGE : - '  + '<br />' + '<br />' + 'GRADE : Not possible' +'<br />' + '<br />' + 'Remarks : - ')
}

else if(PERCENTAGE7 >= 80  && PERCENTAGE7  <= 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber7 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained7 + '<br />' + '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE7 + '%' +'<br />'+ '<br />'  + 'GRADE : A-one' +'<br />'+ '<br />' 
                     + 'Remarks : Excellent'+ '<br />' +'<br />' + '*****MANY CONGRATULATIONS*****')
}
else if(PERCENTAGE7 >= 70 && PERCENTAGE7 < 80){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'+ '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '<br />'+ '<br />'  + 'Total marks : ' + totalNumber7 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtaine7 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE7 + '%' +'<br />' + '<br />' + 'GRADE : A ' +'<br />'+ '<br />'  + 'Remarks : Good')
}

else if (PERCENTAGE7 >= 60  && PERCENTAGE7 < 70){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'+ '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '<br />'+ '<br />'  + 'Total marks : '+ totalNumber7 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained7 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE7 + '%' +'<br />'+ '<br />'  + 'GRADE : B' +'<br />' + '<br />' + 'Remarks : Better')
}

else if (PERCENTAGE7 >= 50  && PERCENTAGE7  < 60){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'+ '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '<br />' + '<br />' + 'Total marks : ' + totalNumber7 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained7 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE7 + '%' +'<br />'+ '<br />'  + 'GRADE : C' +'<br />'+ '<br />'  + 'Remarks : You need to improve')
}

else if (PERCENTAGE7 >= 40  && PERCENTAGE7  < 50){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber7 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained7 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE7 + '%' +'<br />'+ '<br />'  + 'GRADE : D' +'<br />' + '<br />' + 'Remarks : Not Better')
}
else if (PERCENTAGE7 >= 33  && PERCENTAGE7  < 40){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'+ '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '<br />'+ '<br />'  + 'Total marks : ' + totalNumber7 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained7 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE7 + '%' +'<br />' + '<br />' + 'GRADE : E' +'<br />'+ '<br />'  + 'Remarks : Passed')
}
else   { 
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber7 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained7 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE7 + '%' +'<br />'+ '<br />'  + 'GRADE : Fail' +'<br />'+ '<br />'  + 'Remarks : Need Hard Work')
}

    }


//********************************************* For 8 Subjects ****************************************\\

else if(totalSubjects === '8' ) {
  
  console.log (
        total1 = Number(prompt('Total marks in subject no. 1'))
  )
  console.log (
        num1 = Number(prompt('Obtained marks in subject no. 1'))
  ) 
  
  console.log (
        total2=Number( prompt('Total marks in subject no. 2'))
  )
    console.log (
        num2 = Number(prompt('Obtained marks in subject no. 2'))
  )     
  
  console.log (
        total3= Number(prompt('Total marks in subject no. 3'))
  )
    console.log (
        num3 = Number(prompt('Obtained marks in subject no. 3'))
  )     
  
  console.log (
        total4=Number( prompt('Total marks in subject no. 4'))
  )
    console.log (
        num4 = Number(prompt('Obtained marks in subject no. 4'))
  ) 
  
  console.log (
        total5=Number( prompt('Total marks in subject no. 5'))
  )
    console.log (
        num5 = Number(prompt('Obtained marks in subject no. 5'))
  )     
  
  console.log (
        total6=Number (prompt('Total marks in subject no. 6'))
  )
    console.log (
        num6 = Number(prompt('Obtained marks in subject no. 6'))
  ) 
  
  console.log (
        total7= Number(prompt('Total marks in subject no. 7'))
  )
    console.log (
        num7 = Number(prompt('Obtained marks in subject no. 7'))
  ) 
  
  console.log (
        total8=Number( prompt('Total marks in subject no. 8'))
  )
    console.log (
        num8 = Number(prompt('Obtained marks in subject no. 8'))
  ) 
       totalNumber8 = total1 + total2 + total3+ total4 + total5 + total6 + total7 + total8;
       totalObtained8 = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8;
       PERCENTAGE8 = (( totalObtained8  / totalNumber8 )* 100);
 if(PERCENTAGE8 > 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber8 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained8 + '<br />'+ '<br />'  +
                    'PERCENTAGE : - '  + '<br />' + '<br />' + 'GRADE : Not possible' +'<br />' + '<br />' + 'Remarks : - ')
}

else if(PERCENTAGE8 >= 80  && PERCENTAGE8  <= 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber8 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained8 + '<br />' + '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE8 + '%' +'<br />' + '<br />' + 'GRADE : A-one' +'<br />'+ '<br />' 
                     + 'Remarks : Excellent'+ '<br />' +'<br />' + '*****MANY CONGRATULATIONS*****')
}
else if(PERCENTAGE8 >= 70 && PERCENTAGE8 < 80){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'+ '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />' + '<br />' + 'Total marks : ' + totalNumber8 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained8 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE8 + '%' +'<br />'+ '<br />'  + 'GRADE : A ' +'<br />'+ '<br />'  + 'Remarks : Good')
}

else if (PERCENTAGE8 >= 60  && PERCENTAGE8 < 70){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'+ '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />' + '<br />' + 'Total marks : '+ totalNumber8 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained8 + '<br />' + '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE8 + '%' +'<br />'+ '<br />'  + 'GRADE : B' +'<br />'+ '<br />'  + 'Remarks : Better')
}

else if (PERCENTAGE8 >= 50  && PERCENTAGE8  < 60){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber8 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained8 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE8 + '%' +'<br />' + '<br />' + 'GRADE : C' +'<br />'+ '<br />'  + 'Remarks : You need to improve')
}

else if (PERCENTAGE8 >= 40  && PERCENTAGE8  < 50){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber8 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained8 + '<br />' + '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE8 + '%' +'<br />'+ '<br />'  + 'GRADE : D' +'<br />'+ '<br />'  + 'Remarks : Not Better')
}
else if (PERCENTAGE8 >= 33  && PERCENTAGE8  < 40){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber8 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained8 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE8 + '%' +'<br />' + '<br />' + 'GRADE : E' +'<br />' + '<br />' + 'Remarks : Passed')
}
else   { 
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber8 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained8 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE8 + '%' +'<br />'+ '<br />'  + 'GRADE : Fail' +'<br />'+ '<br />'  + 'Remarks : Need Hard Work')
}

    }



//********************************************* For 9 Subjects ****************************************\\


else if(totalSubjects === '9' ) {
  
  console.log (
        total1 = Number( prompt('Total marks in subject no. 1') )
  )
  console.log (
        num1 = Number(prompt('Obtained marks in subject no. 1'))
  ) 
  
  console.log (
        total2= Number(prompt('Total marks in subject no. 2'))
  )
    console.log (
        num2 = Number(prompt('Obtained marks in subject no. 2'))
  )     
  
  console.log (
        total3= Number(prompt('Total marks in subject no. 3'))
  )
    console.log (
        num3 = Number(prompt('Obtained marks in subject no. 3'))
  )     
  
  console.log (
        total4= Number(prompt('Total marks in subject no. 4'))
  )
    console.log (
        num4 = Number(prompt('Obtained marks in subject no. 4'))
  ) 
  
  console.log (
        total5=Number( prompt('Total marks in subject no. 5'))
  )
    console.log (
        num5 = Number(prompt('Obtained marks in subject no. 5'))
  )     
  
  console.log (
        total6= Number(prompt('Total marks in subject no. 6'))
  )
    console.log (
        num6 = Number(prompt('Obtained marks in subject no. 6'))
  ) 
  
  console.log (
        total7=Number( prompt('Total marks in subject no. 7'))
  )
    console.log (
        num7 = Number(prompt('Obtained marks in subject no. 7'))
  ) 
  
  console.log (
        total8=Number( prompt('Total marks in subject no. 8'))
  )
    console.log (
        num8 = Number(prompt('Obtained marks in subject no. 8'))
  ) 
  
  console.log (
        total9=Number( prompt('Total marks in subject no. 9'))
  )
    console.log (
        num9 = Number(prompt('Obtained marks in subject no. 9'))
  ) 
       totalNumber9 = total1 + total2 + total3+ total4 + total5 + total6 + total7 + total8 + total9;
       totalObtained9 = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8; + num9
       PERCENTAGE9 = (( totalObtained9  / totalNumber9 )* 100);
 if(PERCENTAGE9 > 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'+ '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '<br />'+ '<br />'  + 'Total marks : ' + totalNumber9 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained9 + '<br />'+ '<br />'  +
                    'PERCENTAGE : - '  + '<br />' + '<br />' + 'GRADE : Not possible' +'<br />'+ '<br />'  + 'Remarks : - ')
}

else if(PERCENTAGE9 >= 80  && PERCENTAGE9  <= 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber9 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained9 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE9 + '%' +'<br />'+ '<br />'  + 'GRADE : A-one' +'<br />'+ '<br />' 
                     + 'Remarks : Excellent'+ '<br />' +'<br />' + '*****MANY CONGRATULATIONS*****')
}
else if(PERCENTAGE9 >= 70 && PERCENTAGE9 < 80){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber9 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtaine9 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE9 + '%' +'<br />' + '<br />' + 'GRADE : A ' +'<br />'+ '<br />'  + 'Remarks : Good')
}

else if (PERCENTAGE9 >= 60  && PERCENTAGE9 < 70){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'+ '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '<br />'+ '<br />'  + 'Total marks : '+ totalNumber9 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained9 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE9 + '%' +'<br />'+ '<br />'  + 'GRADE : B' +'<br />' + '<br />' + 'Remarks : Better')
}

else if (PERCENTAGE9 >= 50  && PERCENTAGE9  < 60){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'+ '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '<br />'+ '<br />'  + 'Total marks : ' + totalNumber9 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained9 + '<br />' + '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE9 + '%' +'<br />'+ '<br />'  + 'GRADE : C' +'<br />' + '<br />' + 'Remarks : You need to improve')
}

else if (PERCENTAGE9 >= 40  && PERCENTAGE9  < 50){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber9 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained9 + '<br />' + '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE9 + '%' +'<br />'+ '<br />'  + 'GRADE : D' +'<br />'+ '<br />'  + 'Remarks : Not Better')
}
else if (PERCENTAGE9 >= 33  && PERCENTAGE9  < 40){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber9 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained9 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE9 + '%' +'<br />'+ '<br />'  + 'GRADE : E' +'<br />' + '<br />' + 'Remarks : Passed')
}
else   { 
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'+ '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '<br />'+ '<br />'  + 'Total marks : ' + totalNumber9 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained9 + '<br />' + '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE9 + '%' +'<br />' + '<br />' + 'GRADE : Fail' +'<br />' + '<br />' + 'Remarks : Need Hard Work')
}

    }


//********************************************* For 10 Subjects ****************************************\\


else if(totalSubjects === '10' ) {
  
  console.log (
        total1 = Number( prompt('Total marks in subject no. 1') )
  )
  console.log (
        num1 = Number(prompt('Obtained marks in subject no. 1'))
  ) 
  
  console.log (
        total2= Number(prompt('Total marks in subject no. 2'))
  )
    console.log (
        num2 = Number(prompt('Obtained marks in subject no. 2'))
  )     
  
  console.log (
        total3= Number(prompt('Total marks in subject no. 3'))
  )
    console.log (
        num3 = Number(prompt('Obtained marks in subject no. 3'))
  )     
  
  console.log (
        total4= Number(prompt('Total marks in subject no. 4'))
  )
    console.log (
        num4 = Number(prompt('Obtained marks in subject no. 4'))
  ) 
  
  console.log (
        total5=Number( prompt('Total marks in subject no. 5'))
  )
    console.log (
        num5 = Number(prompt('Obtained marks in subject no. 5'))
  )     
  
  console.log (
        total6= Number(prompt('Total marks in subject no. 6'))
  )
    console.log (
        num6 = Number(prompt('Obtained marks in subject no. 6'))
  ) 
  
  console.log (
        total7=Number( prompt('Total marks in subject no. 7'))
  )
    console.log (
        num7 = Number(prompt('Obtained marks in subject no. 7'))
  ) 
  
  console.log (
        total8=Number( prompt('Total marks in subject no. 8'))
  )
    console.log (
        num8 = Number(prompt('Obtained marks in subject no. 8'))
  ) 
  
  console.log (
        total9=Number( prompt('Total marks in subject no. 9'))
  )
    console.log (
        num9 = Number(prompt('Obtained marks in subject no. 9'))
  ) 
  
  console.log (
        total10=Number( prompt('Total marks in subject no. 10'))
  )
    console.log (
        num10 = Number(prompt('Obtained marks in subject no. 10'))
  ) 
       totalNumber10 = total1 + total2 + total3+ total4 + total5 + total6 + total7 + total8 + total9
                         + total10;
       totalObtained10 = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8; + num9 + num10;
       PERCENTAGE10 = (( totalObtained10  / totalNumber10 )* 100);
 if(PERCENTAGE10 > 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber10 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained10 + '<br />' + '<br />' +
                    'PERCENTAGE : - '  + '<br />'+ '<br />'  + 'GRADE : Not possible' +'<br />'+ '<br />'  + 'Remarks : - ')
}

else if(PERCENTAGE10 >= 80  && PERCENTAGE10  <= 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber10 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained10 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE10 + '%' +'<br />'+ '<br />'  + 'GRADE : A-one' +'<br />'+ '<br />' 
                     + 'Remarks : Excellent'+ '<br />' +'<br />' + '*****MANY CONGRATULATIONS*****')
}
else if(PERCENTAGE10 >= 70 && PERCENTAGE10 < 80){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber10 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained10 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE10 + '%' +'<br />' + '<br />' + 'GRADE : A ' +'<br />'+ '<br />'  + 'Remarks : Good')
}

else if (PERCENTAGE10 >= 60  && PERCENTAGE10 < 70){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'+ '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />'  + 'Total marks : '+ totalNumber10 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained10 + '<br />' + '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE10 + '%' +'<br />'+ '<br />'  + 'GRADE : B' +'<br />' + '<br />' + 'Remarks : Better')
}

else if (PERCENTAGE10 >= 50  && PERCENTAGE10  < 60){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'+ '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />'  + 'Total marks : ' + totalNumber10 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained10 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE10 + '%' +'<br />' + '<br />' + 'GRADE : C' +'<br />' + '<br />' + 'Remarks : You need to improve')
}

else if (PERCENTAGE10 >= 40  && PERCENTAGE10  < 50){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber10 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained10 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE10 + '%' +'<br />'+ '<br />'  + 'GRADE : D' +'<br />' + '<br />' + 'Remarks : Not Better')
}
else if (PERCENTAGE10 >= 33  && PERCENTAGE10  < 40){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber10 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained10 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE10 + '%' +'<br />' + '<br />' + 'GRADE : E' +'<br />'+ '<br />'  + 'Remarks : Passed')
}
else   { 
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber10 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained10 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE10 + '%' +'<br />'+ '<br />'  + 'GRADE : Fail' +'<br />'+ '<br />'  + 'Remarks : Need Hard Work')
}

    }


//********************************************* For 11 Subjects ****************************************\\


else if(totalSubjects === '11' ) {
  
  
  console.log (
        total1 = Number( prompt('Total marks in subject no. 1') )
  )
  console.log (
        num1 = Number(prompt('Obtained marks in subject no. 1'))
  ) 
  
  console.log (
        total2= Number(prompt('Total marks in subject no. 2'))
  )
    console.log (
        num2 = Number(prompt('Obtained marks in subject no. 2'))
  )     
  
  console.log (
        total3= Number(prompt('Total marks in subject no. 3'))
  )
    console.log (
        num3 = Number(prompt('Obtained marks in subject no. 3'))
  )     
  
  console.log (
        total4= Number(prompt('Total marks in subject no. 4'))
  )
    console.log (
        num4 = Number(prompt('Obtained marks in subject no. 4'))
  ) 
  
  console.log (
        total5=Number( prompt('Total marks in subject no. 5'))
  )
    console.log (
        num5 = Number(prompt('Obtained marks in subject no. 5'))
  )     
  
  console.log (
        total6= Number(prompt('Total marks in subject no. 6'))
  )
    console.log (
        num6 = Number(prompt('Obtained marks in subject no. 6'))
  ) 
  
  console.log (
        total7=Number( prompt('Total marks in subject no. 7'))
  )
    console.log (
        num7 = Number(prompt('Obtained marks in subject no. 7'))
  ) 
  
  console.log (
        total8=Number( prompt('Total marks in subject no. 8'))
  )
    console.log (
        num8 = Number(prompt('Obtained marks in subject no. 8'))
  ) 
  
  console.log (
        total9=Number( prompt('Total marks in subject no. 9'))
  )
    console.log (
        num9 = Number(prompt('Obtained marks in subject no. 9'))
  ) 
  
  console.log (
        total10=Number( prompt('Total marks in subject no. 10'))
  )
    console.log (
        num10 = Number(prompt('Obtained marks in subject no. 10'))
  )
  
  console.log (
        total11= Number ( prompt('Total marks in subject no. 11'))
  )
    console.log (
        num11 = Number(prompt('Obtained marks in subject no. 11'))
  ) 
       totalNumber11 = total1 + total2 + total3+ total4 + total5 + total6 + total7 + total8 + total9
                         + total10 + total11;
       totalObtained11 = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8; + num9 + num10 + num11;
       PERCENTAGE11 = (( totalObtained11  / totalNumber11 )* 100);
 if(PERCENTAGE11 > 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' 
 + '11th subject marks : ' + num11 + '/' + total11 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber11 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained11 + '<br />' + '<br />' +
                    'PERCENTAGE : - '  + '<br />'+ '<br />'  + 'GRADE : Not possible' +'<br />' + '<br />' + 'Remarks : - ')
}

else if(PERCENTAGE11 >= 80  && PERCENTAGE11  <= 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' 
 + '11th subject marks : ' + num11 + '/' + total11 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber11 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained11 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE11 + '%' +'<br />'+ '<br />'  + 'GRADE : A-one' +'<br />'+ '<br />' 
                     + 'Remarks : Excellent'+ '<br />' +'<br />' + '*****MANY CONGRATULATIONS*****')
}
else if(PERCENTAGE11 >= 70 && PERCENTAGE11 < 80){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' 
 + '11th subject marks : ' + num11 + '/' + total11 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber11 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtaine11 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE11 + '%' +'<br />'+ '<br />'  + 'GRADE : A ' +'<br />'+ '<br />'  + 'Remarks : Good')
}

else if (PERCENTAGE11 >= 60  && PERCENTAGE11 < 70){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' 
 + '11th subject marks : ' + num11 + '/' + total11 + '<br />'+ '<br />' + 'Total marks : '+ totalNumber11 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained11 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE11 + '%' +'<br />'+ '<br />'  + 'GRADE : B' +'<br />' + '<br />' + 'Remarks : Better')
}

else if (PERCENTAGE11 >= 50  && PERCENTAGE11  < 60){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' 
 + '11th subject marks : ' + num11 + '/' + total11 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber11 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained11 + '<br />' + '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE11 + '%' +'<br />'+ '<br />'  + 'GRADE : C' +'<br />' + '<br />' + 'Remarks : You need to improve')
}

else if (PERCENTAGE11 >= 40  && PERCENTAGE11  < 50){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'+ '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' 
 + '11th subject marks : ' + num11 + '/' + total11 + '<br />' + '<br />' + 'Total marks : ' + totalNumber11 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained11 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE11 + '%' +'<br />'+ '<br />'  + 'GRADE : D' +'<br />' + '<br />' + 'Remarks : Not Better')
}
else if (PERCENTAGE11 >= 33  && PERCENTAGE11  < 40){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' 
 + '11th subject marks : ' + num11 + '/' + total11 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber11 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained11 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE11 + '%' +'<br />' + '<br />' + 'GRADE : E' +'<br />'+ '<br />'  + 'Remarks : Passed')
}
else   { 
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' 
 + '11th subject marks : ' + num11 + '/' + total11 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber11 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained11 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE11 + '%' +'<br />'+ '<br />'  + 'GRADE : Fail' +'<br />'+ '<br />'  + 'Remarks : Need Hard Work')
}

    }



//********************************************* For 12 Subjects ****************************************\\


else if(totalSubjects === '12' ) {
 
  
  console.log (
        total1 = Number( prompt('Total marks in subject no. 1') )
  )
  console.log (
        num1 = Number(prompt('Obtained marks in subject no. 1'))
  ) 
  
  console.log (
        total2= Number(prompt('Total marks in subject no. 2'))
  )
    console.log (
        num2 = Number(prompt('Obtained marks in subject no. 2'))
  )     
  
  console.log (
        total3= Number(prompt('Total marks in subject no. 3'))
  )
    console.log (
        num3 = Number(prompt('Obtained marks in subject no. 3'))
  )     
  
  console.log (
        total4= Number(prompt('Total marks in subject no. 4'))
  )
    console.log (
        num4 = Number(prompt('Obtained marks in subject no. 4'))
  ) 
  
  console.log (
        total5=Number( prompt('Total marks in subject no. 5'))
  )
    console.log (
        num5 = Number(prompt('Obtained marks in subject no. 5'))
  )     
  
  console.log (
        total6= Number(prompt('Total marks in subject no. 6'))
  )
    console.log (
        num6 = Number(prompt('Obtained marks in subject no. 6'))
  ) 
  
  console.log (
        total7=Number( prompt('Total marks in subject no. 7'))
  )
    console.log (
        num7 = Number(prompt('Obtained marks in subject no. 7'))
  ) 
  
  console.log (
        total8=Number( prompt('Total marks in subject no. 8'))
  )
    console.log (
        num8 = Number(prompt('Obtained marks in subject no. 8'))
  ) 
  
  console.log (
        total9=Number( prompt('Total marks in subject no. 9'))
  )
    console.log (
        num9 = Number(prompt('Obtained marks in subject no. 9'))
  ) 
  
  console.log (
        total10=Number( prompt('Total marks in subject no. 10'))
  )
    console.log (
        num10 = Number(prompt('Obtained marks in subject no. 10'))
  )
  
  console.log (
        total11= Number( prompt('Total marks in subject no. 11'))
  )
    console.log (
        num11 = Number(prompt('Obtained marks in subject no. 11'))
  ) 
  
  console.log (
        total12= Number (prompt('Total marks in subject no. 12'))
  )
    console.log (
        num12 = Number(prompt('Obtained marks in subject no. 12'))
  ) 
       totalNumber12 = total1 + total2 + total3+ total4 + total5 + total6 + total7 + total8 + total9
                         + total10 + total11 + total12;
       totalObtained12 = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8; + num9 + num10 +
                           num11 + num12;
       PERCENTAGE12 = (( totalObtained12  / totalNumber12 )* 100);
 if(PERCENTAGE12 > 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' 
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber12 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained12 + '<br />'+ '<br />'  +
                    'PERCENTAGE : - '  + '<br />' + '<br />' + 'GRADE : Not possible' +'<br />'+ '<br />'  + 'Remarks : - ')
}

else if(PERCENTAGE12 >= 80  && PERCENTAGE12  <= 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' 
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber12 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained12 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE12 + '%' +'<br />'+ '<br />'  + 'GRADE : A-one' +'<br />'+ '<br />' 
                     + 'Remarks : Excellent'+ '<br />' +'<br />' + '*****MANY CONGRATULATIONS*****')
}
else if(PERCENTAGE12 >= 70 && PERCENTAGE12 < 80){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' 
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber12 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtaine12 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE12 + '%' +'<br />' + '<br />' + 'GRADE : A ' +'<br />'+ '<br />'  + 'Remarks : Good')
}

else if (PERCENTAGE12 >= 60  && PERCENTAGE12 < 70){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' 
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />' + 'Total marks : '+ totalNumber12 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained12 + '<br />' + '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE12 + '%' +'<br />' + '<br />' + 'GRADE : B' +'<br />' + '<br />' + 'Remarks : Better')
}

else if (PERCENTAGE12 >= 50  && PERCENTAGE12  < 60){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' 
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber12 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained12 + '<br />' + '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE12 + '%' +'<br />'+ '<br />'  + 'GRADE : C' +'<br />'+ '<br />'  + 'Remarks : You need to improve')
}

else if (PERCENTAGE12 >= 40  && PERCENTAGE12  < 50){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' 
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber12 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained12 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE12 + '%' +'<br />'+ '<br />'  + 'GRADE : D' +'<br />'+ '<br />'  + 'Remarks : Not Better')
}
else if (PERCENTAGE12 >= 33  && PERCENTAGE12  < 40){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' 
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber12 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained12 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE12 + '%' +'<br />'+ '<br />'  + 'GRADE : E' +'<br />'+ '<br />'  + 'Remarks : Passed')
}
else   { 
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' 
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />' + 'Total marks : ' + totalNumber12 +
                    '<br />'+ '<br />'  + 'Marks obtained : ' + totalObtained12 + '<br />'+ '<br />'  +
                    'PERCENTAGE : ' + PERCENTAGE12 + '%' +'<br />'+ '<br />'  + 'GRADE : Fail' +'<br />'+ '<br />'  + 'Remarks : Need Hard Work')
}

    }



//********************************************* For 13 Subjects ****************************************\\


else if(totalSubjects === '13' ) {
 
  console.log (
        total1 = Number( prompt('Total marks in subject no. 1') )
  )
  console.log (
        num1 = Number(prompt('Obtained marks in subject no. 1'))
  ) 
  
  console.log (
        total2= Number(prompt('Total marks in subject no. 2'))
  )
    console.log (
        num2 = Number(prompt('Obtained marks in subject no. 2'))
  )     
  
  console.log (
        total3= Number(prompt('Total marks in subject no. 3'))
  )
    console.log (
        num3 = Number(prompt('Obtained marks in subject no. 3'))
  )     
  
  console.log (
        total4= Number(prompt('Total marks in subject no. 4'))
  )
    console.log (
        num4 = Number(prompt('Obtained marks in subject no. 4'))
  ) 
  
  console.log (
        total5=Number( prompt('Total marks in subject no. 5'))
  )
    console.log (
        num5 = Number(prompt('Obtained marks in subject no. 5'))
  )     
  
  console.log (
        total6= Number(prompt('Total marks in subject no. 6'))
  )
    console.log (
        num6 = Number(prompt('Obtained marks in subject no. 6'))
  ) 
  
  console.log (
        total7=Number( prompt('Total marks in subject no. 7'))
  )
    console.log (
        num7 = Number(prompt('Obtained marks in subject no. 7'))
  ) 
  
  console.log (
        total8=Number( prompt('Total marks in subject no. 8'))
  )
    console.log (
        num8 = Number(prompt('Obtained marks in subject no. 8'))
  ) 
  
  console.log (
        total9=Number( prompt('Total marks in subject no. 9'))
  )
    console.log (
        num9 = Number(prompt('Obtained marks in subject no. 9'))
  ) 
  
  console.log (
        total10=Number( prompt('Total marks in subject no. 10'))
  )
    console.log (
        num10 = Number(prompt('Obtained marks in subject no. 10'))
  )
  
  console.log (
        total11= Number( prompt('Total marks in subject no. 11'))
  )
    console.log (
        num11 = Number(prompt('Obtained marks in subject no. 11'))
  ) 
  
  console.log (
        total12= Number (prompt('Total marks in subject no. 12'))
  )
    console.log (
        num12 = Number(prompt('Obtained marks in subject no. 12'))
  ) 
  
  console.log (
        total13= Number (prompt('Total marks in subject no. 13'))
  )
    console.log (
        num13 = Number(prompt('Obtained marks in subject no. 13'))
  ) 
       totalNumber13 = total1 + total2 + total3+ total4 + total5 + total6 + total7 + total8 + total9
                         + total10 + total11 + total12 + total13;
       totalObtained13 = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8; + num9 + num10 +
                           num11 + num12 + num13;
       PERCENTAGE13 = (( totalObtained13  / totalNumber13 )* 100);
 if(PERCENTAGE13 > 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'+ '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />' 
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />' 
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />' 
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />' 
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />' 
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />' 
 + '13th subject marks : ' + num13 + '/' + total13 + '<br />'+ '<br />'  + 'Total marks : ' + totalNumber13 +
                    '<br />' + '<br />' + 'Marks obtained : ' + totalObtained13 + '<br />' + '<br />' +
                    'PERCENTAGE : - '  + '<br />'+ '<br />'  + 'GRADE : Not possible' +'<br />'+ '<br />'  + 'Remarks : - ')
}

else if(PERCENTAGE13 >= 80  && PERCENTAGE13  <= 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />'
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />'
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />'
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />'
 + '13th subject marks : ' + num13 + '/' + total13 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber13 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtained13 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE13 + '%' +'<br />'+ '<br />' + 'GRADE : A-one' +'<br />'+ '<br />' 
                    + 'Remarks : Excellent'+ '<br />' +'<br />' + '*****MANY CONGRATULATIONS*****')
}
else if(PERCENTAGE13 >= 70 && PERCENTAGE13 < 80){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />'
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />'
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />'
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />'
 + '13th subject marks : ' + num13 + '/' + total13 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber13 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtaine13 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE13 + '%' +'<br />'+ '<br />' + 'GRADE : A ' +'<br />'+ '<br />' + 'Remarks : Good')
}

else if (PERCENTAGE13 >= 60  && PERCENTAGE13 < 70){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />'
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />'
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />'
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />'
 + '13th subject marks : ' + num13 + '/' + total13 + '<br />'+ '<br />'+ 'Total marks : '+ totalNumber13 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained13 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE13 + '%' +'<br />' + '<br />'+ 'GRADE : B' +'<br />'+ '<br />' + 'Remarks : Better')
}

else if (PERCENTAGE13 >= 50  && PERCENTAGE13  < 60){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />'
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />'
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />'
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />'
 + '13th subject marks : ' + num13 + '/' + total13 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber13 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtained13 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE13 + '%' +'<br />'+ '<br />' + 'GRADE : C' +'<br />'+ '<br />' + 'Remarks : You need to improve')
}

else if (PERCENTAGE13 >= 40  && percentge13  < 50){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />'
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />'
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />'
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />'
 + '13th subject marks : ' + num13 + '/' + total13 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber13 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtained13 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE13 + '%' +'<br />' + '<br />'+ 'GRADE : D' +'<br />'+ '<br />' + 'Remarks : Not Better')
}
else if (PERCENTAGE13 >= 33  && PERCENTAGE13  < 40){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />'
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />'
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />'
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />'
 + '13th subject marks : ' + num13 + '/' + total13 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber13 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtained13 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE13 + '%' +'<br />'+ '<br />' + 'GRADE : E' +'<br />'+ '<br />' + 'Remarks : Passed')
}
else   { 
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />'
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />'
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />'
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />'
 + '13th subject marks : ' + num13 + '/' + total13 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber13 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtained13 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE13 + '%' +'<br />'+ '<br />' + 'GRADE : Fail' +'<br />'+ '<br />' + 'Remarks : Need Hard Work')
}

    }


//********************************************* For 14 Subjects ****************************************\\


else if(totalSubjects === '14' ) {
  
  
  console.log (
        total1 = Number( prompt('Total marks in subject no. 1') )
  )
  console.log (
        num1 = Number(prompt('Obtained marks in subject no. 1'))
  ) 
  
  console.log (
        total2= Number(prompt('Total marks in subject no. 2'))
  )
    console.log (
        num2 = Number(prompt('Obtained marks in subject no. 2'))
  )     
  
  console.log (
        total3= Number(prompt('Total marks in subject no. 3'))
  )
    console.log (
        num3 = Number(prompt('Obtained marks in subject no. 3'))
  )     
  
  console.log (
        total4= Number(prompt('Total marks in subject no. 4'))
  )
    console.log (
        num4 = Number(prompt('Obtained marks in subject no. 4'))
  ) 
  
  console.log (
        total5=Number( prompt('Total marks in subject no. 5'))
  )
    console.log (
        num5 = Number(prompt('Obtained marks in subject no. 5'))
  )     
  
  console.log (
        total6= Number(prompt('Total marks in subject no. 6'))
  )
    console.log (
        num6 = Number(prompt('Obtained marks in subject no. 6'))
  ) 
  
  console.log (
        total7=Number( prompt('Total marks in subject no. 7'))
  )
    console.log (
        num7 = Number(prompt('Obtained marks in subject no. 7'))
  ) 
  
  console.log (
        total8=Number( prompt('Total marks in subject no. 8'))
  )
    console.log (
        num8 = Number(prompt('Obtained marks in subject no. 8'))
  ) 
  
  console.log (
        total9=Number( prompt('Total marks in subject no. 9'))
  )
    console.log (
        num9 = Number(prompt('Obtained marks in subject no. 9'))
  ) 
  
  console.log (
        total10=Number( prompt('Total marks in subject no. 10'))
  )
    console.log (
        num10 = Number(prompt('Obtained marks in subject no. 10'))
  )
  
  console.log (
        total11= Number( prompt('Total marks in subject no. 11'))
  )
    console.log (
        num11 = Number(prompt('Obtained marks in subject no. 11'))
  ) 
  
  console.log (
        total12= Number (prompt('Total marks in subject no. 12'))
  )
    console.log (
        num12 = Number(prompt('Obtained marks in subject no. 12'))
  ) 
  
  console.log (
        total13= Number( prompt('Total marks in subject no. 13'))
  )
    console.log (
        num13 = Number(prompt('Obtained marks in subject no. 13'))
  ) 
  
  console.log (
        total14= Number (prompt('Total marks in subject no. 14'))
  )
    console.log (
        num14 = Number(prompt('Obtained marks in subject no. 14'))
  ) 
       totalNumber14 = total1 + total2 + total3+ total4 + total5 + total6 + total7 + total8 + total9
                         + total10 + total11 + total12 + total13 + total14;
       totalObtained14 = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8; + num9 + num10 +
                           num11 + num12 + num13 + num14;
       PERCENTAGE14 = (( totalObtained14  / totalNumber14 )* 100);
 if(PERCENTAGE14 > 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />'
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />'
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />'
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />'
 + '13th subject marks : ' + num13 + '/' + total13 + '_____ '
 + '14th subject marks : ' + num14 + '/' + total14 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber14 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtained14 + '<br />'+ '<br />' +
                    'PERCENTAGE : - '  + '<br />' + '<br />'+ 'GRADE : Not possible' +'<br />'+ '<br />' + 'Remarks : - ')
}

else if(PERCENTAGE14 >= 80  && PERCENTAGE14  <= 100){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />'
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />'
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />'
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />'
 + '13th subject marks : ' + num13 + '/' + total13 + '_____ '
 + '14th subject marks : ' + num14 + '/' + total14 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber14 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtained14 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE14 + '%' +'<br />'+ '<br />' + 'GRADE : A-one' +'<br />'+ '<br />' 
                    + 'Remarks : Excellent'+ '<br />' +'<br />' + '*****MANY CONGRATULATIONS*****')
}
else if(PERCENTAGE14 >= 70 && PERCENTAGE14 < 80){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />'
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />'
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />'
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />'
 + '13th subject marks : ' + num13 + '/' + total13 + '_____ '
 + '14th subject marks : ' + num14 + '/' + total14 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber14 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtaine14 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE14 + '%' +'<br />' + '<br />'+ 'GRADE : A ' +'<br />' + '<br />'+ 'Remarks : Good')
}

else if (PERCENTAGE14 >= 60  && PERCENTAGE14 < 70){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />'
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />'
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />'
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />'
 + '13th subject marks : ' + num13 + '/' + total13 + '_____ '
 + '14th subject marks : ' + num14 + '/' + total14 + '<br />'+ '<br />'+ 'Total marks : '+ totalNumber14 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtained14 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE14 + '%' +'<br />'+ '<br />' + 'GRADE : B' +'<br />' + '<br />'+ 'Remarks : Better')
}

else if (PERCENTAGE14 >= 50  && PERCENTAGE14  < 60){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />'+ '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />'
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />'
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />'
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />'
 + '13th subject marks : ' + num13 + '/' + total13 + '_____ '
 + '14th subject marks : ' + num14 + '/' + total14 + '<br />' + '<br />'+ 'Total marks : ' + totalNumber14 +
                    '<br />'+ '<br />' + 'Marks obtained : ' + totalObtained14 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE14 + '%' +'<br />'+ '<br />' + 'GRADE : C' +'<br />'+ '<br />' + 'Remarks : You need to improve')
}

else if (PERCENTAGE14 >= 40  && PERCENTAGE14  < 50){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />'
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />'
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />'
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />'
 + '13th subject marks : ' + num13 + '/' + total13 + '_____ '
 + '14th subject marks : ' + num14 + '/' + total14 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber14 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtained14 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE14 + '%' +'<br />' + '<br />'+ 'GRADE : D' +'<br />'+ '<br />' + 'Remarks : Not Better')
}
else if (PERCENTAGE14 >= 33  && PERCENTAGE14  < 40){
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />'
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />'
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />'
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />'
 + '13th subject marks : ' + num13 + '/' + total13 + '_____ '
 + '14th subject marks : ' + num14 + '/' + total14 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber14 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtained14 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE14 + '%' +'<br />'+ '<br />' + 'GRADE : E' +'<br />'+ '<br />' + 'Remarks : Passed')
}
else   { 
     document.write( '---------------MARKS SHEET--------------- <br />' + '<br />' + '1st subject marks : ' + num1 + '/' + total1 + '_____ '
 + '2nd subject marks : ' + num2 + '/' + total2 + '<br />'+ '<br />'
 + '3rd subject marks : ' + num3 + '/' + total3 + '_____ '
 + '4th subject marks : ' + num4 + '/' + total4 + '<br />'+ '<br />'
 + '5th subject marks : ' + num5 + '/' + total5 + '_____ '
 + '6th subject marks : ' + num6 + '/' + total6 + '<br />'+ '<br />'
 + '7th subject marks : ' + num7 + '/' + total7 + '_____ '
 + '8th subject marks : ' + num8 + '/' + total8 + '<br />'+ '<br />'
 + '9th subject marks : ' + num9 + '/' + total9 + '_____ '
 + '10th subject marks : ' + num10 + '/' + total10 + '<br />'+ '<br />'
 + '11th subject marks : ' + num11 + '/' + total11 + '_____ '
 + '12th subject marks : ' + num12 + '/' + total12 + '<br />'+ '<br />'
 + '13th subject marks : ' + num13 + '/' + total13 + '_____ '
 + '14th subject marks : ' + num14 + '/' + total14 + '<br />'+ '<br />'+ 'Total marks : ' + totalNumber14 +
                    '<br />' + '<br />'+ 'Marks obtained : ' + totalObtained14 + '<br />'+ '<br />' +
                    'PERCENTAGE : ' + PERCENTAGE14 + '%' +'<br />'+ '<br />' + 'GRADE : Fail' +'<br />'+ '<br />' + 'Remarks : Need Hard Work')
}

    }






else{
    document.write('Please enter no. of subjects between 1 to 14.  <br /> If you want 15 or more than 15 subjects at a  time in your course then concern "OSAMA IMTIAZ"');
}




