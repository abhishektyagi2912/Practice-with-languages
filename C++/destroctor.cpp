#include<iostream>
using namespace std;


class num{
int count=0;
    public:
    num(){
        count++;
        cout<<"constructor is called "<<count<<endl;

    }
    ~num(){
        cout<<"destructor is called "<<count<<endl;
        count--;
    }

};

    int main(){
        cout<<"we are in main"<<endl;
        num n1;
        //block it distruct when it exit the function
        {
            cout<<"we are in n1"<<endl;
            num n2,n3;
            cout<<"exit"<<endl;
        }
        cout<<"back to main "<<endl;
    
    return 0;
}