#!/bin/bash
PATH_TO_OUTPUT_DIR="/Users/aleksandrsamodurov/Desktop/pet/purchaseapp/src/app/pages"
PATH_TO_ORIGIN_DIR="/Users/aleksandrsamodurov/Desktop/pet/purchaseapp/src/app/pages/todo"


for VARIABLE in 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47
do
    mkdir $PATH_TO_OUTPUT_DIR/$VARIABLE
    cp $PATH_TO_ORIGIN_DIR/todo.component.html $PATH_TO_OUTPUT_DIR/$VARIABLE/$VARIABLE.component.html
    cp $PATH_TO_ORIGIN_DIR/todo.component.ts $PATH_TO_OUTPUT_DIR/$VARIABLE/$VARIABLE.component.ts
    cp $PATH_TO_ORIGIN_DIR/todo.module.ts $PATH_TO_OUTPUT_DIR/$VARIABLE/$VARIABLE.module.ts
    cp $PATH_TO_ORIGIN_DIR/todo.service.ts $PATH_TO_OUTPUT_DIR/$VARIABLE/$VARIABLE.service.ts
    cp $PATH_TO_ORIGIN_DIR/todo.styles.css $PATH_TO_OUTPUT_DIR/$VARIABLE/$VARIABLE.styles.css
    mkdir $PATH_TO_OUTPUT_DIR/$VARIABLE/item
    cp $PATH_TO_ORIGIN_DIR/item/item.component.html $PATH_TO_OUTPUT_DIR/$VARIABLE/item/item.component.html
    cp $PATH_TO_ORIGIN_DIR/item/item.component.ts $PATH_TO_OUTPUT_DIR/$VARIABLE/item/item.component.ts
    cp $PATH_TO_ORIGIN_DIR/item/item.module.ts $PATH_TO_OUTPUT_DIR/$VARIABLE/item/item.module.ts
    cp $PATH_TO_ORIGIN_DIR/item/item.styles.css $PATH_TO_OUTPUT_DIR/$VARIABLE/item/item.styles.css
done


