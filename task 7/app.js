"use strict";
const tax =0.075 ;
function Employee(id,fullName,departMent,level,imageUrl,salary)
{this.id=id;
this.fullName=fullName;
this.departMent=departMent;
this.level=level;
this.imageUrl=imageUrl;
this.salary=salary;}

function salaryLevel(level){
    if (level==senior){
        max=2000;
        min=1500;
    }else if(level==midsenior){
        max=1500;
        min=1000;
    }
    else if(level==junior){
        max=1000;
        min=500;
    }
    salarylevel=(max+min)/2;
    return salarylevel;
    }

    function finalSalary (tax ,level){
       salary=salarylevel(level)
       salary=(salary-salary*tax);
return salary;}

const Ghazi = new Employee( 1000,"Gazi Samer","adminstration","Senior") ;
const Lana = new Employee( 1001,"Lana Ali","Finance","Senior") ;
const Tamara = new Employee( 1002,"Tamara Ayoub","marketing","Senior") ;
const Safi = new Employee( 1003,"Safi Walid","adminstration","medsenior") ;
const Omar = new Employee( 1004,"Omar Zaid","development","Senior") ;
const Rana = new Employee( 1005,"Rana Saleh","development","junior") ;
const Hadi = new Employee( 1006,"Hadi Ahmad","finance","medsenior") ;

const emparray = [ Gazi , Lana , Tamara , Safi , Omar , Rana , Hadi ];
Employee.prototype.render = function()
{const tableBody = document.getElementById(elmentid`user table`)
let counter = 0;
emparray.forEach(item => {
    counter++;
    let trelemnt = document.createElement('tr')
    let tdelement = document.createElement('td')
    tdelement.textContent=`${item.fullName}`
    let thelement = document.createElement('th')        
    trelemnt.appendChild(thelement)
    trelemnt.appendChild(tdelement)
    tableBody.appendChild(trelemnt)

   // <tr>
       // <th>${counter}</th>
       // <td>${item.fullName}</td>
       // <td>${finalSalary(0.075 , item.level)}</td>
   // </tr>
})
}
