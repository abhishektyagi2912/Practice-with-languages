#include <iostream>
using namespace std;
inline int product(int a, int b)
{
    // static int c=0;
    // c=c+1;  //when we use static function it will be executed only once
                //and with static do not use inlline function
    return a * b;
}

float bank(int pro, float bal = 1.02)
{   //default argument can be used in inline function
    //default bal

    return pro * bal;
}

int main()
{
    int x, y;
    cout << "Enter number1: ";
    cin >> x;
    cout << "Enter number2: ";
    cin >> y;
    cout << "Product of " << x << " and " << y << " is: " << product(x, y) << endl;
    cout << "Product of " << x << " and " << y << " is: " << product(x, y) << endl;
    cout << "Product of " << x << " and " << y << " is: " << product(x, y) << endl;
    cout << "Product of " << x << " and " << y << " is: " << product(x, y) << endl;
    cout << "Product of " << x << " and " << y << " is: " << bank(x) << endl; //defalult argument
    //but we give value of y then it constant argument
    return 0;
}