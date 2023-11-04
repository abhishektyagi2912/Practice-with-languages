#include<iostream>
using namespace std;

    int main(){
    int i=67;
    int *y=&i;
    cout<<"The value of i is "<<*y<<endl;
    cout<<"The value of i is "<<&i<<endl;
    return 0;
}