const test = {
    "graph_data": {
        "A mistake made by a person when working on a software system\nFault.": [
            "Error.",
            "A problem with the software that arises because of an error\nFailure.",
            "Behavior of the system that does not match specifications, due to a fault.",
            "Note that not all errors lead to faults and that not all faults lead to failures.",
            "It's the failures we're most concerned about finding; when we find them, we also have to diagnose it, which means finding and correcting the fault and (ideally) deciding the cause of the error, so that we might be able to introduce measures to avoid it in the future."
        ],
        "A problem with the software that arises because of an error\nFailure.": [
            "Error.",
            "A mistake made by a person when working on a software system\nFault.",
            "Behavior of the system that does not match specifications, due to a fault.",
            "Note that not all errors lead to faults and that not all faults lead to failures.",
            "It's the failures we're most concerned about finding; when we find them, we also have to diagnose it, which means finding and correcting the fault and (ideally) deciding the cause of the error, so that we might be able to introduce measures to avoid it in the future."
        ],
        "A typical way to deal with this is to require a few different numbers of iterations (e.g., zero (if possible), one, an average number, and a maximum number).Testing Problems.": [
            "One interesting question is how we should deal with loops, especially those that might potentially run many times (or even forever)."
        ],
        "Behavior of the system that does not match specifications, due to a fault.": [
            "A mistake made by a person when working on a software system\nFault.",
            "A problem with the software that arises because of an error\nFailure.",
            "Note that not all errors lead to faults and that not all faults lead to failures.",
            "It's the failures we're most concerned about finding; when we find them, we also have to diagnose it, which means finding and correcting the fault and (ideally) deciding the cause of the error, so that we might be able to introduce measures to avoid it in the future."
        ],
        "Control Flow Graphs.": [
            "Every node in the control flow graph is reached during the execution of at least one of the tests.",
            "Every edge in the control flow graph is followed during the execution of at least one of the tests.",
            "Every path through the control flow graph is followed during the execution of at least one of the tests."
        ],
        "Edge coverage.": [
            "Node coverage.",
            "On the other hand, achieving node coverage is often not sufficient.",
            "This is more thorough than node coverage, since we're not only considering each line, but different ways of reaching each line.",
            "Path coverage.",
            "This is more thorough than edge coverage, since it considers all possible ways to pass through each edge."
        ],
        "Error.": [
            "A mistake made by a person when working on a software system\nFault.",
            "A problem with the software that arises because of an error\nFailure."
        ],
        "Every edge in the control flow graph is followed during the execution of at least one of the tests.": [
            "Control Flow Graphs.",
            "Every node in the control flow graph is reached during the execution of at least one of the tests.",
            "This means that every \"branch\" (i.e., every way to get from one line to another) in the program is followed at least once.",
            "This is more thorough than node coverage, since we're not only considering each line, but different ways of reaching each line.",
            "Every path through the control flow graph is followed during the execution of at least one of the tests.",
            "This is more thorough than edge coverage, since it considers all possible ways to pass through each edge.",
            "The number of tests required to achieve path coverage explodes exponentially as the number of conditionals increases, since we have to consider every possible way of passing through the conditionals."
        ],
        "Every node in the control flow graph is reached during the execution of at least one of the tests.": [
            "Control Flow Graphs.",
            "Node coverage.",
            "Not achieving node coverage means that there are some parts of our program that we never tested at all.",
            "In a method with multiple, separate if statements, node coverage might be achieved with only a couple of tests, but different combinations of these if statements haven't been tested.",
            "Every edge in the control flow graph is followed during the execution of at least one of the tests.",
            "This means that every \"branch\" (i.e., every way to get from one line to another) in the program is followed at least once.",
            "This is more thorough than node coverage, since we're not only considering each line, but different ways of reaching each line.",
            "Every path through the control flow graph is followed during the execution of at least one of the tests."
        ],
        "Every path through the control flow graph is followed during the execution of at least one of the tests.": [
            "Control Flow Graphs.",
            "Every node in the control flow graph is reached during the execution of at least one of the tests.",
            "Every edge in the control flow graph is followed during the execution of at least one of the tests.",
            "This means that every \"branch\" (i.e., every way to get from one line to another) in the program is followed at least once.",
            "This is more thorough than node coverage, since we're not only considering each line, but different ways of reaching each line.",
            "Path coverage.",
            "The number of tests required to achieve path coverage explodes exponentially as the number of conditionals increases, since we have to consider every possible way of passing through the conditionals."
        ],
        "In a method with multiple, separate if statements, node coverage might be achieved with only a couple of tests, but different combinations of these if statements haven't been tested.": [
            "Node coverage.",
            "Every node in the control flow graph is reached during the execution of at least one of the tests.",
            "Not achieving node coverage means that there are some parts of our program that we never tested at all.",
            "On the other hand, achieving node coverage is often not sufficient.",
            "This is more thorough than node coverage, since we're not only considering each line, but different ways of reaching each line.",
            "This is more thorough than edge coverage, since it considers all possible ways to pass through each edge.",
            "The number of tests required to achieve path coverage explodes exponentially as the number of conditionals increases, since we have to consider every possible way of passing through the conditionals."
        ],
        "It's the failures we're most concerned about finding; when we find them, we also have to diagnose it, which means finding and correcting the fault and (ideally) deciding the cause of the error, so that we might be able to introduce measures to avoid it in the future.": [
            "A mistake made by a person when working on a software system\nFault.",
            "A problem with the software that arises because of an error\nFailure.",
            "Behavior of the system that does not match specifications, due to a fault.",
            "Note that not all errors lead to faults and that not all faults lead to failures."
        ],
        "Node coverage.": [
            "Every node in the control flow graph is reached during the execution of at least one of the tests.",
            "Not achieving node coverage means that there are some parts of our program that we never tested at all.",
            "On the other hand, achieving node coverage is often not sufficient.",
            "In a method with multiple, separate if statements, node coverage might be achieved with only a couple of tests, but different combinations of these if statements haven't been tested.",
            "Edge coverage.",
            "This is more thorough than node coverage, since we're not only considering each line, but different ways of reaching each line.",
            "Path coverage.",
            "This is more thorough than edge coverage, since it considers all possible ways to pass through each edge.",
            "The number of tests required to achieve path coverage explodes exponentially as the number of conditionals increases, since we have to consider every possible way of passing through the conditionals."
        ],
        "Not achieving node coverage means that there are some parts of our program that we never tested at all.": [
            "Node coverage.",
            "Every node in the control flow graph is reached during the execution of at least one of the tests.",
            "On the other hand, achieving node coverage is often not sufficient.",
            "In a method with multiple, separate if statements, node coverage might be achieved with only a couple of tests, but different combinations of these if statements haven't been tested.",
            "This is more thorough than node coverage, since we're not only considering each line, but different ways of reaching each line.",
            "Path coverage.",
            "This is more thorough than edge coverage, since it considers all possible ways to pass through each edge.",
            "The number of tests required to achieve path coverage explodes exponentially as the number of conditionals increases, since we have to consider every possible way of passing through the conditionals."
        ],
        "Note that not all errors lead to faults and that not all faults lead to failures.": [
            "A mistake made by a person when working on a software system\nFault.",
            "A problem with the software that arises because of an error\nFailure.",
            "Behavior of the system that does not match specifications, due to a fault.",
            "It's the failures we're most concerned about finding; when we find them, we also have to diagnose it, which means finding and correcting the fault and (ideally) deciding the cause of the error, so that we might be able to introduce measures to avoid it in the future."
        ],
        "On the other hand, achieving node coverage is often not sufficient.": [
            "Node coverage.",
            "Not achieving node coverage means that there are some parts of our program that we never tested at all.",
            "In a method with multiple, separate if statements, node coverage might be achieved with only a couple of tests, but different combinations of these if statements haven't been tested.",
            "Edge coverage.",
            "This is more thorough than node coverage, since we're not only considering each line, but different ways of reaching each line.",
            "Path coverage.",
            "This is more thorough than edge coverage, since it considers all possible ways to pass through each edge.",
            "The number of tests required to achieve path coverage explodes exponentially as the number of conditionals increases, since we have to consider every possible way of passing through the conditionals."
        ],
        "One interesting question is how we should deal with loops, especially those that might potentially run many times (or even forever).": [
            "We're likelier to see problems with our logic this way, especially in the presence of many if statements and/or loops.",
            "A typical way to deal with this is to require a few different numbers of iterations (e.g., zero (if possible), one, an average number, and a maximum number).Testing Problems."
        ],
        "Path coverage.": [
            "Node coverage.",
            "Not achieving node coverage means that there are some parts of our program that we never tested at all.",
            "On the other hand, achieving node coverage is often not sufficient.",
            "Edge coverage.",
            "This is more thorough than node coverage, since we're not only considering each line, but different ways of reaching each line.",
            "Every path through the control flow graph is followed during the execution of at least one of the tests.",
            "This is more thorough than edge coverage, since it considers all possible ways to pass through each edge.",
            "The number of tests required to achieve path coverage explodes exponentially as the number of conditionals increases, since we have to consider every possible way of passing through the conditionals."
        ],
        "The number of tests required to achieve path coverage explodes exponentially as the number of conditionals increases, since we have to consider every possible way of passing through the conditionals.": [
            "Node coverage.",
            "Not achieving node coverage means that there are some parts of our program that we never tested at all.",
            "On the other hand, achieving node coverage is often not sufficient.",
            "In a method with multiple, separate if statements, node coverage might be achieved with only a couple of tests, but different combinations of these if statements haven't been tested.",
            "Every edge in the control flow graph is followed during the execution of at least one of the tests.",
            "This is more thorough than node coverage, since we're not only considering each line, but different ways of reaching each line.",
            "Path coverage.",
            "Every path through the control flow graph is followed during the execution of at least one of the tests.",
            "This is more thorough than edge coverage, since it considers all possible ways to pass through each edge."
        ],
        "This is more thorough than edge coverage, since it considers all possible ways to pass through each edge.": [
            "Node coverage.",
            "Not achieving node coverage means that there are some parts of our program that we never tested at all.",
            "On the other hand, achieving node coverage is often not sufficient.",
            "In a method with multiple, separate if statements, node coverage might be achieved with only a couple of tests, but different combinations of these if statements haven't been tested.",
            "Edge coverage.",
            "Every edge in the control flow graph is followed during the execution of at least one of the tests.",
            "This is more thorough than node coverage, since we're not only considering each line, but different ways of reaching each line.",
            "Path coverage.",
            "The number of tests required to achieve path coverage explodes exponentially as the number of conditionals increases, since we have to consider every possible way of passing through the conditionals."
        ],
        "This is more thorough than node coverage, since we're not only considering each line, but different ways of reaching each line.": [
            "Node coverage.",
            "Every node in the control flow graph is reached during the execution of at least one of the tests.",
            "Not achieving node coverage means that there are some parts of our program that we never tested at all.",
            "On the other hand, achieving node coverage is often not sufficient.",
            "In a method with multiple, separate if statements, node coverage might be achieved with only a couple of tests, but different combinations of these if statements haven't been tested.",
            "Edge coverage.",
            "Every edge in the control flow graph is followed during the execution of at least one of the tests.",
            "Path coverage.",
            "Every path through the control flow graph is followed during the execution of at least one of the tests.",
            "This means we're considering every possible sequence of lines that we could follow from the beginning to the end of the method.",
            "This is more thorough than edge coverage, since it considers all possible ways to pass through each edge.",
            "The number of tests required to achieve path coverage explodes exponentially as the number of conditionals increases, since we have to consider every possible way of passing through the conditionals."
        ],
        "This means that every \"branch\" (i.e., every way to get from one line to another) in the program is followed at least once.": [
            "Every node in the control flow graph is reached during the execution of at least one of the tests.",
            "This means, essentially, that every statement in the program is reached at least once.",
            "Every edge in the control flow graph is followed during the execution of at least one of the tests.",
            "Every path through the control flow graph is followed during the execution of at least one of the tests.",
            "This means we're considering every possible sequence of lines that we could follow from the beginning to the end of the method."
        ],
        "This means we're considering every possible sequence of lines that we could follow from the beginning to the end of the method.": [
            "This means, essentially, that every statement in the program is reached at least once.",
            "This means that every \"branch\" (i.e., every way to get from one line to another) in the program is followed at least once.",
            "This is more thorough than node coverage, since we're not only considering each line, but different ways of reaching each line."
        ],
        "This means, essentially, that every statement in the program is reached at least once.": [
            "This means that every \"branch\" (i.e., every way to get from one line to another) in the program is followed at least once.",
            "This means we're considering every possible sequence of lines that we could follow from the beginning to the end of the method."
        ],
        "We're likelier to see problems with our logic this way, especially in the presence of many if statements and/or loops.": [
            "One interesting question is how we should deal with loops, especially those that might potentially run many times (or even forever)."
        ]
    },
    "headers": {
        "Control Flow Graph Coverage": [
            "Every path through the control flow graph is followed during the execution of at least one of the tests.",
            "Control Flow Graphs.",
            "Every edge in the control flow graph is followed during the execution of at least one of the tests.",
            "Every node in the control flow graph is reached during the execution of at least one of the tests."
        ],
        "Error Handling Framework": [
            "Note that not all errors lead to faults and that not all faults lead to failures.",
            "It's the failures we're most concerned about finding; when we find them, we also have to diagnose it, which means finding and correcting the fault and (ideally) deciding the cause of the error, so that we might be able to introduce measures to avoid it in the future.",
            "Behavior of the system that does not match specifications, due to a fault.",
            "A mistake made by a person when working on a software system\nFault.",
            "A problem with the software that arises because of an error\nFailure."
        ],
        "Exhaustive Path Testing": [
            "This means we're considering every possible sequence of lines that we could follow from the beginning to the end of the method.",
            "This means, essentially, that every statement in the program is reached at least once.",
            "This means that every \"branch\" (i.e., every way to get from one line to another) in the program is followed at least once."
        ],
        "Loop Handling": [
            "One interesting question is how we should deal with loops, especially those that might potentially run many times (or even forever).",
            "We're likelier to see problems with our logic this way, especially in the presence of many if statements and/or loops."
        ],
        "Loop Management": [
            "One interesting question is how we should deal with loops, especially those that might potentially run many times (or even forever).",
            "A typical way to deal with this is to require a few different numbers of iterations (e.g., zero (if possible), one, an average number, and a maximum number).Testing Problems."
        ],
        "Software Error Types": [
            "A mistake made by a person when working on a software system\nFault.",
            "A problem with the software that arises because of an error\nFailure.",
            "Error."
        ],
        "Test Coverage Levels": [
            "The number of tests required to achieve path coverage explodes exponentially as the number of conditionals increases, since we have to consider every possible way of passing through the conditionals.",
            "In a method with multiple, separate if statements, node coverage might be achieved with only a couple of tests, but different combinations of these if statements haven't been tested.",
            "Edge coverage.",
            "Not achieving node coverage means that there are some parts of our program that we never tested at all.",
            "Path coverage.",
            "This is more thorough than edge coverage, since it considers all possible ways to pass through each edge.",
            "On the other hand, achieving node coverage is often not sufficient.",
            "Every node in the control flow graph is reached during the execution of at least one of the tests.",
            "Node coverage.",
            "This is more thorough than node coverage, since we're not only considering each line, but different ways of reaching each line."
        ]
    },
    "message": "File uploaded and processed",
    "notes": {
        "Control Flow Graph Coverage": [
            "The control flow graph is completely traversed during at least one test.  The test covers all edges and nodes."
        ],
        "Error Handling Framework": [
            "Errors in software systems do not always lead to faults or failures.  The focus is on identifying and diagnosing failures, which are caused by faults.  Faults are issues in the software caused by human errors."
        ],
        "Exhaustive Path Testing": [
            "The method covers all possible line sequences. This ensures every statement and branch in the program is executed."
        ],
        "Loop Handling": [
            "Important Information: Handling loops, especially those that may run repeatedly or indefinitely, can lead to logic errors. Logic errors can arise when multiple if statements and loops are combined."
        ],
        "Loop Management": [
            "Important Information: Limiting Loop Iterations in Testing: Essential for avoiding indefinite loops Approaches: Setting iteration limits"
        ],
        "Software Error Types": [
            "1. Mistake in software development 2. Fault 3. Problem 4. Failure in the system"
        ],
        "Test Coverage Levels": [
            "Important Information: Path coverage: Crucially important for comprehensive testing Covers all possible paths through conditionals Node coverage: Requires fewer tests Does not ensure full program coverage Edge coverage: Less thorough than path coverage Node coverage: More thorough than edge coverage Covers different ways of reaching each line"
        ]
    },
    "notes_title": "Software Testing Concepts",
    "quiz": [
        {
            "correct answer": "Executing all possible paths through the graph",
            "options": [
                "Traversing all nodes in the graph",
                "Covering all edges in the graph",
                "Executing all possible paths through the graph",
                "Identifying all potential entry and exit points"
            ],
            "question": "Which of the following criteria ensures complete coverage of a control flow graph during testing?"
        },
        {
            "correct answer": "All edges and nodes are covered",
            "options": [
                "Node coverage is achieved",
                "Only some edges are covered",
                "All edges and nodes are covered",
                "Branch coverage is sufficient"
            ],
            "question": "Which of the following conditions indicates complete coverage of a control flow graph during testing?"
        },
        {
            "correct answer": "Path coverage",
            "options": [
                "Path coverage",
                "Node coverage",
                "Edge coverage",
                "Statement coverage"
            ],
            "question": "Which coverage level requires the most test cases to achieve complete coverage?"
        },
        {
            "correct answer": "Node coverage",
            "options": [
                "Path coverage",
                "Node coverage",
                "Edge coverage",
                "Condition coverage"
            ],
            "question": "Which type of test coverage requires the least number of tests, but does not guarantee complete program coverage?"
        },
        {
            "correct answer": "Exhaustive Path Testing",
            "options": [
                "Branch Coverage Testing",
                "Statement Coverage Testing",
                "Condition Coverage Testing",
                "Exhaustive Path Testing"
            ],
            "question": "Which testing approach aims to exercise every possible line sequence in the program?"
        },
        {
            "correct answer": "Extensive coverage of all possible paths",
            "options": [
                "Limited error detection",
                "Extensive coverage of all possible paths",
                "Focus on critical paths only",
                "Emphasis on boundary conditions"
            ],
            "question": "Which characteristic of exhaustive path testing ensures that all statements and branches in a program are executed?"
        },
        {
            "correct answer": "Loops running repeatedly",
            "options": [
                "Single if statements",
                "Loops running repeatedly",
                "Simple variable assignments",
                "Linear sequences of statements"
            ],
            "question": "When working with code, which scenario is most likely to lead to logic errors?"
        },
        {
            "correct answer": "Conditional statements",
            "options": [
                "Conditional statements",
                "Arithmetic operations",
                "Array manipulation",
                "File handling"
            ],
            "question": "Regarding loop handling, which element can contribute to logic errors when combined?"
        },
        {
            "correct answer": "Limiting the number of loop iterations",
            "options": [
                "Executing loops without iteration constraints",
                "Limiting the number of loop iterations",
                "Ignoring loop management practices",
                "Emphasizing thorough loop coverage"
            ],
            "question": "When designing test cases to avoid potential indefinite loop scenarios, which approach is recommended?"
        },
        {
            "correct answer": "Setting iteration limits",
            "options": [
                "Increasing iteration limits",
                "Setting iteration limits",
                "Timing iterations",
                "Monitoring loop execution speed"
            ],
            "question": "When managing loops during testing, which approach is crucial for preventing indefinite loops?"
        },
        {
            "correct answer": "Failure",
            "options": [
                "Mistake",
                "Failure",
                "Fault",
                "Problem"
            ],
            "question": "Which of the following is the term used to describe a deviation in software behavior from expected behavior?"
        },
        {
            "correct answer": "Mistake",
            "options": [
                "Fault",
                "Mistake",
                "Problem",
                "Failure"
            ],
            "question": "Which term refers to an incorrect action or decision made during software development?"
        },
        {
            "correct answer": "Identifying and diagnosing faults",
            "options": [
                "Identifying and diagnosing faults",
                "Classifying faults based on their severity",
                "Preventing errors from occurring in the software",
                "Eliminating the root cause of failures"
            ],
            "question": "Which aspect of software errors is the main focus in the 'Error Handling Framework'?"
        },
        {
            "correct answer": "Identifying faults is more important than detecting errors.",
            "options": [
                "Identifying faults is more important than detecting errors.",
                "Faults are caused by errors in the software.",
                "Identifying errors is sufficient to prevent failures.",
                "Faults are not related to errors in the software."
            ],
            "question": "Which of the following statements accurately reflects the notes provided about the error handling framework?"
        }
    ],
    "subject tag": "Computer Science",
    "summaries": {
        "Control Flow Graph Coverage": "The control flow graph is completely traversed during at least one test, covering all edges and nodes.",
        "Error Handling Framework": "Errors in software systems do not always lead to faults or failures. The focus is on identifying and diagnosing failures, which are caused by faults. Faults are issues in the software caused by human errors.",
        "Exhaustive Path Testing": "The method covers all possible line sequences to ensure every statement and branch in the program is executed.",
        "Loop Handling": "Handling loops, especially those that may run repeatedly or indefinitely, can lead to logic errors when combined with multiple if statements and loops.",
        "Loop Management": "Limiting the number of iterations in loops, especially those that could run indefinitely, is a relevant topic in testing scenarios. Different approaches, such as setting limits on the number of iterations, are used to address this issue.",
        "Software Error Types": "A mistake in software development can cause a fault, leading to a problem and ultimately a failure in the system.",
        "Test Coverage Levels": "Path coverage is crucial for comprehensive testing as it covers all possible paths through conditionals. Node coverage requires fewer tests but does not ensure full program coverage. Edge coverage is less thorough than path coverage, while node coverage is more thorough as it covers different ways of reaching each line."
    },
    "text": [
        "Control Flow Graphs.",
        "Node coverage.",
        "Every node in the control flow graph is reached during the execution of at least one of the tests.",
        "This means, essentially, that every statement in the program is reached at least once.",
        "Not achieving node coverage means that there are some parts of our program that we never tested at all.",
        "On the other hand, achieving node coverage is often not sufficient.",
        "In a method with multiple, separate if statements, node coverage might be achieved with only a couple of tests, but different combinations of these if statements haven't been tested.",
        "Edge coverage.",
        "Every edge in the control flow graph is followed during the execution of at least one of the tests.",
        "This means that every \"branch\" (i.e., every way to get from one line to another) in the program is followed at least once.",
        "This is more thorough than node coverage, since we're not only considering each line, but different ways of reaching each line.",
        "We're likelier to see problems with our logic this way, especially in the presence of many if statements and/or loops.",
        "Path coverage.",
        "Every path through the control flow graph is followed during the execution of at least one of the tests.",
        "This means we're considering every possible sequence of lines that we could follow from the beginning to the end of the method.",
        "This is more thorough than edge coverage, since it considers all possible ways to pass through each edge.",
        "The number of tests required to achieve path coverage explodes exponentially as the number of conditionals increases, since we have to consider every possible way of passing through the conditionals.",
        "One interesting question is how we should deal with loops, especially those that might potentially run many times (or even forever).",
        "A typical way to deal with this is to require a few different numbers of iterations (e.g., zero (if possible), one, an average number, and a maximum number).Testing Problems.",
        "Error.",
        "A mistake made by a person when working on a software system\nFault.",
        "A problem with the software that arises because of an error\nFailure.",
        "Behavior of the system that does not match specifications, due to a fault.",
        "Note that not all errors lead to faults and that not all faults lead to failures.",
        "It's the failures we're most concerned about finding; when we find them, we also have to diagnose it, which means finding and correcting the fault and (ideally) deciding the cause of the error, so that we might be able to introduce measures to avoid it in the future."
    ]
}

export default test