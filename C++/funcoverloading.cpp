#include<iostream>
using namespace std;
//in this program compiler automatic decide which function to call based on the number of arguments
    int sum(int a,int b){
        return a+b;
    }
    
    int sum(int a,int b,int c){
        return a+b+c;
    }
    
    int main(){
    cout<<"Sum of 2 and 3 is: "<<sum(2,3)<<endl;
    cout<<"Sum of 2, 3 and 4 is: "<<sum(2,3,4)<<endl;
    return 0;
}