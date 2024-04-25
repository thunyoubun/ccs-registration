"use client";
import React, { useState } from "react";
import LoginForm from "./Component/LoginForm";

export default function LoginPage() {
  return (
    <div className="h-screen bg-blue-500 p-8">
      <div className="flex justify-center items-center h-full">
        <LoginForm />
      </div>
    </div>
  );
}
