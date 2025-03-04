import { AxiosConfig } from "@/configs";
import { ReqAuthVerification } from "@/interfaces/request";

export const AuthService = {
  verification:(body:ReqAuthVerification)=> AxiosConfig().post('/auth/verification',body),
}