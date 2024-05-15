export const getUserInput = async (request) => {
    const payload = await request.formData();
    return Object.fromEntries(payload)
};

const hasNoEmptyValues = (data) => {
    return Object.values(data).every(value => value);
}

export const isValid = (data) => {
    if (!hasNoEmptyValues(data)) {
        return false;
    }

    return true;
};