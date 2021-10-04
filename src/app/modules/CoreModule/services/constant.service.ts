import { InjectionToken } from '@angular/core';
import { ProjectInfoModel } from "../models/config.model";

export const projectInfoInjector = new InjectionToken<ProjectInfoModel>('projectInfo');

export const projectInfo = {App: "TaskManager", Ver: "1.0", API_URL: "http://localhost:4200"};
