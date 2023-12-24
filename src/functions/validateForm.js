export function validateForm($form) {
    const $inputs = $form.querySelectorAll("input, select, textarea");
    const $terms = $form.querySelector("input[name='terms']");
    let isValid = true;

    $inputs.forEach(($input) => {
        if (!$input.value.trim()) {
            isValid = false;
            $input.classList.add("error");
        } else {
            $input.classList.remove("error");
        }
    });

    if (!$terms.checked) {
        isValid = false;
        $terms.classList.add("error");
    } else {
        $terms.classList.remove("error");
    }

    return isValid;
}
