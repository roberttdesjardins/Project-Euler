#include <stdio.h>
#include <math.h>

double problem16(double base, double exponent);

int main() {
  
  double base = 2;
  double exponent = 1000;

  double sum = problem16(base, exponent);

  printf("The sum of the digits is: %f\n", sum);

  return 0;
}

double problem16(double base, double exponent) {
  double num = pow(base, exponent);
  printf("The num is: %f\n", num);
  double remainder;
  double sum = 0;
  while(num != 0) {
    remainder = fmod(num,10);
    sum = sum + remainder;
    num = num/10;
  }
  return sum;
}