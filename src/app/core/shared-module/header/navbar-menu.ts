export class NavbarMenus {
    admin = ['Admin', 'EIM', 'Reports', 'Leave', 'Track Employee', 'Contact Book'];
    manager = ['Admin', 'EIM', 'Time Registration', 'ContactBook', 'Reports(utility)'];
    employee = ['Time Registration', 'Leave'];

    adminRoutes = {
        'Admin': "admin-admin",
        'EIM': "eim",
        'Reports': "reports",
        'Leave': "leave",
        'Track Employee': "trackEmployee",
        'Contact Book': "contactBook"
    };
    managerRoutes = {
        'Admin': "admin-manager",
        'EIM': "eim",
        'Time Registration': "timeRegistration",
        'ContactBook': "contactBook",
        'Reports(utility)': "reportsUtility"
    };
    employeeRoutes = {
        'Time Registration': "timeRegistration",
        'Leave': "leave"
    };
}