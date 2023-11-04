#include <iostream>
using namespace std;
class shop
{
    int itemId[100];
    int itemPrice[100];
    int counter;

public:
    void intcounter(void) { counter = 0; }
    void setprice(void);
    void display(void);
};

void shop::setprice(void)
{
    cout << "Enter the Id of the item " << counter + 1 << endl;
    cin >> itemId[counter];
    cout << "Enter the price of the item " << endl;
    cin >> itemPrice[counter];
    counter++;
}
void shop::display(void)
{
    for (int i = 0; i < counter; i++)
    {
        cout << "The Price of " << itemId[i] << " is :" << itemPrice[i] << "" << endl;
    }
}
int main()
{
    shop s1;
    s1.intcounter();
    s1.setprice();
    s1.setprice();
    s1.setprice();
    s1.setprice();
    s1.display();

    return 0;
}