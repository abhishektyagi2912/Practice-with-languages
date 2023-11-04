#include <iostream>
#include <math.h>
using namespace std;
class point
{
    int a, b;

public:
    friend float diffrence(point, point);
    void setvalue(int x, int y)
    {
        a = x;
        b = y;
    }
};
float diffrence(point p1, point p2)
{
    float c = sqrt(pow((p1.a - p2.a), 2) + pow((p1.b - p2.b), 2));
    return c;
}

int main()
{
    int x, y;
    point p, q;
    cout << "Enter the value of x and y: " << endl;
    cin >> x >> y;
    p.setvalue(x, y);
    cout << "Enter the value of x1 and y1: " << endl;
    cin >> x >> y;
    q.setvalue(x, y);
    float c = diffrence(p, q);
    cout << "The ans is : " << c << endl;

    return 0;
}