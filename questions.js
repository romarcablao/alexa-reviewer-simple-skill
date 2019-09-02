let questions = [
    {
        "What types of applications can be created in OutSystems?": [
            "Web, Mobile and Service",
            "Web, Mobile, Service and Extension",
            "Module and Extension",
            "Only Web"
        ]
    }, {
        "Regarding a Consumer module ...": [
            "Only elements with the Public property set to Yes can be exposed and reused by modules of any application.",
            "Any element can be exposed, and reused, but only by modules of the same application.",
            "Any element can be exposed, and reused by modules of any application.",
            "Only elements with the Public property set to Yes can be exposed and reused, but only by modules of the same application."
        ]
    },
    {
        "Entities and Attributes are created in the database as ...": [
            "Tables and Columns",
            "Tables and Indexes",
            "Indexes and Columns",
            "Tables and Constraints"
        ]
    },
    {
        "If an attribute is named \"TotalCount\", OutSystems will automatically set its data type to ...": [
            "Integer",
            "Text",
            "Boolean",
            "Date"
        ]
    },
    {
        "How can we limit the number of records returned by an Aggregate?": [
            "Use the Max. Records property.",
            "Use the Length value.",
            "Use the Count value.",
            "Use Sorting."
        ]
    },
    {
        "What's the correct screen lifecycle order after clicking a Button with the Navigate method?": [
            "Run Preparation then render the destination Screen.",
            "Run Screen Action, run Preparation and render the Destination Screen.",
            "Render Destination Screen then run its Preparation.",
            "Run Preparation then run the Screen Action."
        ]
    },
    {
        "Which HTTP request method does the Submit method use?": [
            "POST",
            "PUT",
            "GET",
            "PATCH"
        ]
    },
    {
        "The Combo Box widget allows selecting one value out of possible alternatives in a drop-down list. Which of the following is NOT POSSIBLE.": [
            "Use the Special List section to get the alternatives from an Entity or a Static Entity.",
            "Use the Source Entity property to get the alternatives from an Entity or a Static Entity.",
            "Use the Source Record List property to get the alternatives from a List of Records.",
            "Use the Special List section to manually set special alternatives."
        ]
    },
    {
        "Server Actions can have the following variables ...": [
            "Input and Output parameters and Local variables.",
            "Output parameters and Local variables, but no Input parameters.",
            "Input and Output parameters, but no Local variables.",
            "Input parameters and Local variables, but no Output parameters."
        ]
    },
    {
        "When data is sent to the server with the Submit method, OutSystems has built-in validations that validate ...": [
            "Mandatory values and correct Data types.",
            "Mandatory values, correct Data Types, and Business Rules.",
            "Correct Data Types and Business Rules.",
            "Mandatory values and Business Rules."
        ]
    },
];

module.exports = questions;