#include<iostream>
using namespace std;

class bankintrest{
    int principal,year;
    float intrestrate,returnvalue;
    public:
    bankintrest(){}
    bankintrest(int p,int y,float r){
        principal=p;
        year=y;
        intrestrate=r;
        returnvalue=principal;
        for (int i=0; i<y ; i++){
            returnvalue=returnvalue*(1+intrestrate);
        }
        
    }
    bankintrest(int p,int y,int r){
        principal=p;
        year=y;
        intrestrate=float(r)/100;
        returnvalue=principal;
        for(int i=0; i < y ; i++){
            returnvalue=returnvalue*(1+intrestrate);
        }
        
    }
    void printnumber(){
        cout<<"The number is: "<<returnvalue<<endl;
    }

};
    int main(){
        bankintrest b1,b2,b3; //-----this will only happen when blank contructor is called 
        int p,y,R;
        float r;
        cout<<"enter the value of p,y and r"<<endl;
        cin>>p>>y>>r;

        b1= bankintrest (p,y,r);
        // bankintrest b1= bankintrest(p,y,r);   //----------   without blank constructor
        b1.printnumber();

        cout<<"enter the value of p,y and r"<<endl;
        cin>>p>>y>>R;
        b2=bankintrest (p,y,R);
        b2.printnumber();



    return 0;
}