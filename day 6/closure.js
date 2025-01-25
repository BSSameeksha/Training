function parent(){
    function child1(){
        console.log("I am child 1");
        function child1_1(){
            console.log("I am grandchild of parent ");
        }
        return child1_1;
    }
    function child2(){
        console.log("I am child 2");
    }
    return [child1,child2]
}
parent()[0]()()
parent()[1]()