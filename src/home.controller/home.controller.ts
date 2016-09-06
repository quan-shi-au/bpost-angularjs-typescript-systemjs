import "angular";
import { DepartmentService } from "../department.service/department.service";

interface IHomeControllerScope extends ng.IScope {
    departments: Department[];
    navigateToDepartment: (id: number) => void;
}

export class HomeController {
    constructor(
        private departmentService: DepartmentService,
        private $scope: IHomeControllerScope,
        private $location: any) {
        $scope.departments = departmentService.getDepartments();
        $scope.navigateToDepartment = this.navigateToDepartment;
    }

    navigateToDepartment = (id: number) => {
        this.$location.path(`/department/${id}`);
    }
}