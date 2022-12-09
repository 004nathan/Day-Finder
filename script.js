// find a time from given input
class Clock{
    constructor(hour,minute,second)
    {
        
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    validTime()
    {
        //check valid time
        if((this.hour <= 24)&&(this.minute <= 60)&&(this.second<=60)&& this.hour >= 0 && this.minute >= 0&&this.second >= 0)
		{
           this.setNoon();
        }
        else{
            console.log("please enter a valid time");
        }
    }
    setNoon()
    {
        //this function defined setnoon from the given data
        if(this.hour == 12 && this.minute == 0&&this.second == 0)
		{
			 console.log( ((12)+":"+this.minute+":"+this.second+"noon"));
		}
		else
		{
           if(this.hour > 12)
       {
       	 console.log( ((this.hour-12)+":"+this.minute+":"+this.second+" PM"));
       	
       }
       else
       {
          console.log( ((this.hour)+":"+this.minute+":"+this.second+" AM"));
       }
		}
    }
}
//create 3 objects for clock class
const timeObject = new Clock(12,30,25);
const timeObject1 = new Clock(13,40,5);
const timeObject2 = new Clock(21,10,75);
//call method from clock class
timeObject.validTime();
timeObject1.validTime();
timeObject2.validTime();
// this class used to find a day from the given date
const days = ["sunday","monday","tuesday","wednesday","Thursday","friday","saturday"];
class DayFinder
{
   
    constructor(date,month,year)
    {
        this.date = date;
        this.month = month;
        this.year = year;
    }
    checkValiddate()
    {
        if((this.month <=12 && this.month>0)&&(this.date <=31 && this.date >0 ))
		{
            this.findDay();
           
        }
        else{
            console.log("please enter a valid date")
        }
    }
    findDay()
    {
        let ordinary=0;
	    let oddDays=0;
        
      
        let temp = this.year;
		this.year = this.year - 1;
		this.year = this.year%400;
		 let monthOdd =[3,0,3,2,3,2,3,3,2,3,2];
		
		if(this.year > 300 && this.year < 400)
		{
			  this.year = this.year - 300;
			  oddDays+=1;
              
		}
		else if(this.year > 200 && this.year < 300)
		{
			  this.year = this.year - 200;
			  oddDays = oddDays + 3;
		}
		else if(this.year > 100 && this.year < 200)
		{
			this.year = this.year-100;
			oddDays = oddDays+5;
		}

		
		

		let temp1 = this.year;
		this.year = this.year/4;
		

		ordinary = temp1 - this.year;
        
		oddDays += (ordinary)+(this.year*2);
		oddDays = Math.floor(oddDays);
        if((temp % 4==0 && (temp % 100!= 0))||temp % 400 == 0)
        {
        	 for(let i =0;i< this.month-1;i++)
                 {
                 	oddDays += monthOdd[i];
                 }
                
            if(this.month > 2)
            {
                
               oddDays += 1;
               
            }
           
        }
        else
        {
          for(let i =0;i< this.month-1;i++)
                 {
                 	oddDays += monthOdd[i];
                 }
                 
        }

        
        oddDays += this.date;
       

       oddDays = oddDays%7;
      

		
        console.log(days[oddDays]);
	    console.log(`Next day from the date ${days[oddDays+1]}`)
    }
   
}
const date1 = new DayFinder(17,5,2004);
const date2 = new DayFinder(15,7,1903);
const date3 = new DayFinder(13,7,2022);
date1.checkValiddate();
date2.checkValiddate();
date3.checkValiddate();

