//union is use single data type use one at a time in cout statement.
//union is used to store data in one single variable.
//union is used only max bytes of data can be stored in union at a time.


#include<iostream>
using namespace std;
    union unions
    {
        int rice;
        float sugar;
        char ch;
    };
    
    int main(){
        // enum meal {RICE,SUGAR,CH};
        // cout<<RICE<<endl;
        // meal m1=SUGAR;
        // cout<<(m1==1)<<endl;
        // cout<<m1<<endl;

        union unions u1;
        u1.sugar=90.5;  
        cout<<"Sugar is: "<<u1.sugar<<endl;
    return 0;
}
