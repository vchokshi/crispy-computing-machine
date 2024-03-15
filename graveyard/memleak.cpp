#include <stdlib.h>
#include <stdio.h>

void generator() {
    size_t * size = (size_t *)malloc(2000 * sizeof(size_t));
}

int main() {
    while (1) {
        generator();
    }
}
