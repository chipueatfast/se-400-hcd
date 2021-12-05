import { forwardRef } from 'react';
import { Typography } from 'ui-build';
import * as Sc from './Input.styled';
import { classNames } from 'helpers/classNames';
import { AlertCirleIcon } from '@trueprofile.io/icons';
import { GREEN_CONFIRM } from 'constants/colors';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: boolean;
  errorText?: string;
  startAdorment?: React.ReactNode;
  endAdorment?: React.ReactNode;
}

/**
 * Let users enter and edit text using `<input type="text">` tag.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226925
 * @example
 * // normal state
 * <Input name="unique-name" label="Label*" />
 *
 * // error state
 * <Input name="unique-name" label="Label*" error errorText="Error message" />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      label,
      error,
      errorText,
      disabled,
      readOnly,
      startAdorment,
      endAdorment,
      ...rest
    }: InputProps,
    ref
  ) => {
    const mainId = id || name;
    const containerClassNames = classNames(
      'TPInput-container',
      error ? 'TPInput-error' : '',
      disabled ? 'TPInput-disabled' : '',
      readOnly ? 'TPInput-readOnly' : ''
    );

    return (
      <Sc.Wrapper className="TPInput-root">
        {label && (
          <Sc.Label htmlFor={mainId}>
            <Typography.Text size="mini" color={error ? 'green_confirm' : 'gray'}>
              {label}
            </Typography.Text>
          </Sc.Label>
        )}
        <div className={containerClassNames}>
          {startAdorment && (
            <Sc.Adorment className="TPInput-adorment-start">
              {startAdorment}
            </Sc.Adorment>
          )}
          <Sc.Input
            {...rest}
            ref={ref}
            id={mainId}
            name={name}
            disabled={disabled}
            readOnly={readOnly}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error && errorText ? `error-hint-${mainId}` : undefined
            }
          />
          {endAdorment && (
            <Sc.Adorment className="TPInput-adorment-end">
              {endAdorment}
            </Sc.Adorment>
          )}
        </div>
        {error && errorText && (
          <div className='d-flex align-items-center'>
  
          <AlertCirleIcon color={GREEN_CONFIRM} style={{
            marginTop: 6, 
          }}/>
          <Sc.Error
            id={`error-hint-${mainId}`}
            role="alert"
            size="mini"
            color="green_confirm"
          >
            {errorText}
          </Sc.Error>
          </div>
          
        )}
      </Sc.Wrapper>
    );
  }
);

Input.displayName = 'Input';
