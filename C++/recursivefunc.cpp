#include <iostream>
using namespace std;

int fab(int x)
{
    if (x < 2)
    {
        return 1;
    }
    return fab(x - 2) + fab(x - 1);
}
int factorial(int y)
{
    if (y <= 1)
    {
        return 1;
    }
    return y * factorial(y - 1); //recursion is used to calculate factorial
}
int main()
{
    int n;
    cout << "Enter number: ";
    cin >> n;
    // cout<<"Factorial of "<<n<<" is: "<<factorial(n)<<endl;
    cout << "Fabo of " << n << " is: " << fab(n) << endl;
    return 0;
}