"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Checkbox } from "@/components/ui/checkbox";
import { StaffDetailType } from "@/types/StaffTypes";
import useStaffEdit from "../../hooks/useStaffEdit";
import Link from "next/link";

type Props = {
  data: StaffDetailType;
};

function StaffEditForm({ data }: Props) {
  const {
    onSubmit,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useStaffEdit(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 space-y-6">
      <FieldGroup className="grid grid-cols-2 gap-4">

        {/* Staff Name */}
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Staff Name</FieldLabel>
              <Input
                placeholder="Enter staff name"
                aria-invalid={fieldState.invalid}
                {...field}
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Department */}
        <Controller
          name="department"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Department</FieldLabel>
              <Input
                placeholder="Enter department"
                aria-invalid={fieldState.invalid}
                {...field}
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Phone */}
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Phone</FieldLabel>
              <Input
                placeholder="Enter phone number"
                aria-invalid={fieldState.invalid}
                {...field}
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <FieldGroup>

        {/* Stay Here */}
        <Controller
          name="stay_here"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="stay-here-check"
                />
                <FieldLabel htmlFor="stay-here-check">
                  Stay here and continue editing
                </FieldLabel>
              </div>
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Confirm */}
        <Controller
          name="confirm"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="confirm-check"
                />
                <FieldLabel htmlFor="confirm-check">
                  I confirm to update staff
                </FieldLabel>
              </div>
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Buttons */}
        <Field className="col-span-full" orientation="horizontal">
          <Link href={`/dashboard/staff/${data.id}`}>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Link>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Spinner className="size-2" />
                <span>Updating ...</span>
              </>
            ) : (
              "Update Staff"
            )}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}

export default StaffEditForm;