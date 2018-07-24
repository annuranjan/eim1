export class SidebarMenus {

    //Note: All the title for a userType has to be unique as adminRoutes, managerRoutes etc use title as key.  
    //Admin Submenus

    admin = {
        eim: [
            {
                title: "EIM Links",
                subMenu: ["View Employees", "Add Employee", "Edit Employee"]
            },
            {
                title: "Add more details",
                subMenu: ["Personal Details",
                    "Languages", "Family Details", "Education Details", "Experience Details", "Training Details", "Nominee Details", "Salary Details"]
            },
            {
                title: "Update Profile",
                subMenu: ["Sub 1 List Item 3", "Sub 2 List Item 3", "Sub 3 List Item 3"]
            }
        ],
        reports: [
            {
                title: "Create Reports",
                subMenu: ["Create Reports"]
            },
            {
                title: "View Admin Reports",
                subMenu: ["Process Reports", "Client Brief Report", "Some XYZ Reports"]
            },
            {
                title: "View Manager Reports",
                subMenu: ["Process Reports", "Client Brief Report", "Some XYZ Reports"]
            },
            {
                title: "View Employee Reports",
                subMenu: ["Process Reports", "Client Brief Report", "Some XYZ Reports"]
            }
        ]
    };

    //Manager Submenus
    manager = {
        eim: [
            {
                title: "Personal Details",
                subMenu: ["Personal Details", "Contact Details", "Emergency Contact", "Immigration Details", "Family Details"]
            },
            {
                title: "Professional Details",
                subMenu: ["Education", "Languages", "Training", "Experience", "Nominee Details", "Upload Your Image"]
            }
        ]
    }

    adminRoutes = {
        "EIM Links": {
            "Add Employee": "addEmployee",
            "View Employees": "viewEmployees",
            "Edit Employee": "editEmployee",
        },
        "Add more details": {
            "Personal Details": "personalDetails",
            "Languages": "languages",
            "Training Details": "trainingDetails",
            "Salary Details": "salaryDetails",
            "Nominee Details": "nomineeDetails",
            "Family Details": "familyDetails",
            "Education Details": "educationDetails",
            "Experience Details": "experienceDetails"
        },

        "Create Reports": {
            "Create Reports": "createReport"
        },

        "View Admin Reports": {
            "Process Reports": "adminProcessReport",
        },
        "View Manager Reports": {
            "Process Reports": "managerProcessReport",
        },
        "View Employee Reports": {
            "Process Reports": "employeeProcessReport"
        }
    }

    managerRoutes = {
        "Personal Details": "personalDetails"
    }

    employeeRoutes = {

    }

}
